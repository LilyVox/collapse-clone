// renders the tiles and utlizes logic from BoardLogic
import Tile from "./Tile";
import {type BoardProps} from '../types'
const Board: React.FC<BoardProps> = ({ board, onTileClick }) => {

  return (
    <div
      className="grid gap-0"
      style={{
        gridTemplateColumns: `repeat(${board[0].length}, minmax(0, 1fr))`,
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((tile, colIndex) => (
          <Tile
            key={tile.id}
            row={rowIndex}
            col={colIndex}
            color={tile.color}
            onClick={onTileClick}
          />
        ))
      )}
    </div>
  );
};

export default Board;