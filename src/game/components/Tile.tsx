// renders a single tile and holds logic
import { type TileProps } from '../types';

const Tile: React.FC<TileProps> = ({ row, col, color, onClick }) => {
  const handleClick = () => {
    if (color) {
      onClick(row, col);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        w-10 h-10 rounded-md flex items-center justify-center cursor-pointer
        transition-all duration-200
        ${color ? '' : 'bg-transparent cursor-default'}
      `}
      style={{ backgroundColor: color || 'transparent' }}>
      {/* optional debug: row,col */}
    </div>
  );
};
export default Tile;
