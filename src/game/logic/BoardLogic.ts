/* eslint-disable for-direction */
import { type Tileset, type TileData, BlockColors } from '../types';
const COLORS = [BlockColors.red, BlockColors.green, BlockColors.blue, BlockColors.yellow, BlockColors.purple];

export const strToBlockColor = (s: string) => {
  switch (s) {
    case 'r':
      return BlockColors.red;
    case 'b':
      return BlockColors.blue;
    case 'y':
      return BlockColors.yellow;
    case 'g':
      return BlockColors.green;
    case 'p':
      return BlockColors.purple;
    case '':
      return BlockColors.empty;
  }
  return BlockColors.empty;
};
export const blockColorToStr = (c: string | null) => {
  switch (c) {
    case BlockColors.red:
      return 'r';
    case BlockColors.blue:
      return 'b';
    case BlockColors.yellow:
      return 'y';
    case BlockColors.green:
      return 'g';
    case BlockColors.purple:
      return 'p';
    case BlockColors.empty:
      return '';
  }
  return '';
};
export const createRandomBoard = (width: number, height: number, colors: number): Tileset => {
  const newBoard = Array.from({ length: height }, (_, r) =>
    Array.from({ length: width }, (_, c) => ({
      id: `${r}-${c}`,
      row: r,
      col: c,
      color: COLORS[Math.floor(Math.random() * colors)],
    }))
  );
  return applyGravity(newBoard);
};
export const loadBoardFromStringArr = (tileset: string[][], height: number, width: number) => {
  return Array.from({ length: height }, (_, r) =>
    Array.from({ length: width }, (_, c) => ({
      id: `${r}-${c}`,
      row: r,
      col: c,
      color: strToBlockColor(tileset[r][c]),
    }))
  );
};
export const writeBoardToStringArr = (tileBoard: Tileset, width: number, height: number) => {
  return Array.from({ length: height }, (_, r) =>
    Array.from({ length: width }, (_, c) => blockColorToStr(tileBoard[r][c].color))
  );
};
export const changeTileInSet = (tileBoard: Tileset, row: number, col: number, color: string) => {
  tileBoard[row][col].color = color;
  return [...tileBoard];
};
export const changeGroupOfTiles = (tileBoard: Tileset, tiles: TileData[], color: string) => {
  tiles.forEach((tile) => {
    tileBoard[tile.row][tile.col].color = color;
  });

  return tileBoard;
};
export const scoreSetTiles = (tiles: TileData[]) => {
  const baselineScorePerTile = 50;
  const tilesHit = tiles.length;
  return baselineScorePerTile * tilesHit ^ 2;
};
export function findConnectedTiles(board: Tileset, row: number, col: number) {
  const directions = { up: [0, 1], down: [0, -1], left: [1, 0], right: [-1, 0] };
  const dirArray = Object.values(directions);
  const checkColor = board[row][col].color;
  const queue: TileData[] = [board[row][col]];
  const validTiles: TileData[] = [board[row][col]];
  const readTiles: TileData[] = [];
  const isSameColor = (currentTile: TileData) => {
    if (currentTile.color === checkColor) {
      return true;
    }
    return false;
  };
  const checkTilesAround = (originTile: TileData) => {
    for (let i = 0; i < Object.entries(directions).length; i++) {
      const dir = dirArray[i];
      const checkRow = originTile.row + dir[0];
      const checkCol = originTile.col + dir[1];
      const height = board.length - 1;
      const width = board[0].length - 1;
      if (checkRow < 0 || checkCol < 0) continue;
      if (checkRow > height || checkCol > width) continue;
      const checkTile = board[checkRow][checkCol];
      if (readTiles.includes(checkTile)) {
        continue;
      }
      if (isSameColor(checkTile)) {
        queue.push(checkTile);
        validTiles.push(checkTile);
      }
      readTiles.push(checkTile);
    }
  };
  while (queue.length > 0) {
    // console.log("queue", queue[0], board[queue[0].row][queue[0].col])
    checkTilesAround(queue[0]);
    queue.shift();
  }
  if (validTiles.length > 2) return validTiles;
  return [];
}
export function copyBoard(board: TileData[][]) {
  const rows = board.length;
  const cols = board[0].length;
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => ({ ...board[r][c] }))
  );
}
export function applyGravity(board: TileData[][]): TileData[][] {
  const rows = board.length;
  const cols = board[0].length;

  // Deep copy so we dont mutate the original
  const newBoard: TileData[][] = copyBoard(board);

  for (let col = 0; col < cols; col++) {
    // Collect non-null tiles from bottom to top
    const stack: TileData[] = [];
    for (let row = rows - 1; row >= 0; row--) {
      if (newBoard[row][col].color !== BlockColors.empty) {
        stack.push(newBoard[row][col]);
      }
    }

    // Fill column bottom-up with collected tiles
    let writeRow = rows - 1;
    for (const tile of stack) {
      newBoard[writeRow][col] = { ...tile, row: writeRow, col };
      writeRow--;
    }

    // Fill remaining spaces with "empty" tiles
    for (let r = writeRow; r >= 0; r--) {
      newBoard[r][col] = {
        id: `${r}-${col}`,
        row: r,
        col,
        color: BlockColors.empty,
      };
    }
  }

  return newBoard;
}
export function collapseToCenter(board: TileData[][]): TileData[][] {
  const rows = board.length;
  const cols = board[0].length;

  // extract active columns
  const activeColumns: TileData[][] = [];
  for (let col = 0; col < cols; col++) {
    const hasTile = board.some(row => row[col].color !== BlockColors.empty);
    if (hasTile) {
      const columnTiles = board.map(row => ({ ...row[col] }));
      activeColumns.push(columnTiles);
    }
  }

  const activeCols = activeColumns.length;

  // calculate target placement
  const newBoard: TileData[][] = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => ({
      id: `${r}-${c}`,
      row: r,
      col: c,
      color: BlockColors.empty,
    }))
  );

  if (activeCols === 0) return newBoard;

  let startCol: number;
  if (cols % 2 === 1) {
    const center = Math.floor(cols / 2);
    startCol = center - Math.floor(activeCols / 2);
  } else {
    const centerLeft = cols / 2 - 1;
    startCol = centerLeft - Math.floor((activeCols - 1) / 2);
  }

  // place active columns into new board
  for (let i = 0; i < activeCols; i++) {
    const targetCol = startCol + i;
    for (let row = 0; row < rows; row++) {
      const tile = activeColumns[i][row];
      if (tile.color !== BlockColors.empty) {
        newBoard[row][targetCol] = {
          color: tile.color,
          id: `${row}-${targetCol}`,
          row,
          col: targetCol,
        };
      }
    }
  }

  return newBoard;
}

export function test() {
  const width = 4;
  const height = 4;
  const example = [
    ['', '', '', 'b'],
    ['b', 'b', 'b', 'r'],
    ['b', 'b', 'r', 'r'],
    ['b', 'r', 'r', 'r'],
  ];
  const tiles = loadBoardFromStringArr(example, height, width);
  console.log('tiles', tiles);
  const randTiles = createRandomBoard(width, height, 4);
  console.log('randTilesWriten', writeBoardToStringArr(randTiles, width, height));
}
