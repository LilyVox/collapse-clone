// renders a single tile and holds logic
import { type TileProps, BlockColors } from '../types';

const Tile: React.FC<TileProps> = ({ row, col, color, onClick }) => {
  const baseTileStyle = 'w-10 h-10 flex items-center justify-center transition-all duration-200';
  const handleClick = () => {
    if (color) {
      onClick(row, col);
    }
  };
  if (color === BlockColors.empty) {
    return (
      <div
        className={`
        ${baseTileStyle} rounded-lg bg-transparent cursor-default`}
        style={{ backgroundColor: 'transparent' }}></div>
    );
  }
  return (
    <div
      onClick={handleClick}
      className={`
        ${baseTileStyle} cursor-pointer border-2 border-border
      `}
      style={{ backgroundColor: color }}></div>
  );
};
export default Tile;
