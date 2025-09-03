/* eslint-disable for-direction */
import { type Tileset, type TileData, BlockColors } from '../types';
const COLORS = ['#e74c3c', '#3498db', '#2ecc71', ''];

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
export const createRandomBoard = (width: number, height: number): Tileset => {
  return Array.from({ length: height }, (_, r) =>
    Array.from({ length: width }, (_, c) => ({
      id: `${r}-${c}`,
      row: r,
      col: c,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))
  );
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

  return applyGravity(tileBoard);
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
export function applyGravity(board: Tileset) {
  console.log('applying gravity.')
  const tileAbove = (tile: TileData) => {
    if (tile.row - 1 < 0) return null;
    return board[tile.row - 1][tile.col];
  };
  const pullDownColoredTileAbove = (tile: TileData) => {
    let foundTile: TileData | null = null;
    const checkingRow: number = tile.col;
    let movement: number = 0;
    while (!foundTile && checkingRow - movement > 0) {
      // if we haven't hit an edge...
      // console.log('checking row...',checkingRow - movement)
      const aboveTile = tileAbove(board[checkingRow - movement][tile.col]);
      if (aboveTile) {
        // check it's color. if transparent, look above it(change row).
        if (aboveTile.color !== BlockColors.empty) {
          foundTile = aboveTile;
          break;
        }
      }
      movement++;
    }
    if (foundTile != null) {
      console.log('found this tile', foundTile);
      // original position
      changeTileInSet(board, foundTile.row, foundTile.col, BlockColors.empty);
      // new position
      changeTileInSet(board, tile.row, tile.col, foundTile.color);
    }
  };
  for (let r = board.length - 1; r > -1; r--) {
    console.log('starting loops', r)
    for (let c = board[r].length - 1; c > -1; c--) {
      const tile = board[r][c];
      if (tile.color === BlockColors.empty) {
        console.log('found an empty one', tile)
        pullDownColoredTileAbove(tile);
      }
    }
  }
  console.log('ending loops');
  return [...board]
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
  const randTiles = createRandomBoard(width, height);
  console.log('randTilesWriten', writeBoardToStringArr(randTiles, width, height));
}
