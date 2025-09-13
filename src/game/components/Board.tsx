import Tile from './Tile';
import { type BoardProps } from '../types';
const Board: React.FC<BoardProps> = ({ board, onTileClick }) => {
  return (
    <div
      className='grid rounded-base border-t-0 shadow-shadow border-2 border-border bg-background text-foreground font-base'
      style={{
        gridTemplateColumns: `repeat(${board[0].length}, minmax(0, 1fr))`,
      }}>
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
