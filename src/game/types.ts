export interface BoardSetup {
  width: number;
  height: number;
}
export type Tileset = TileData[][];
export const BlockColors = { empty: 'transparent', red: '#e74c3c', blue: '#3498db', yellow: '#f1c40f', green: '#2ecc71', purple: '#7c0ef1' };
export type TileProps = {
  row: number;
  col: number;
  color: string; // null means empty/removed
  onClick: (row: number, col: number) => void;
};
export type TileData = {
  id: string;
  row: number;
  col: number;
  color: string;
};
export type BoardProps = {
  board: TileData[][];
  onTileClick: (row: number, col: number) => void;
  highlightGroup?: { row: number; col: number }[];
};
export interface convergeOptions {
  colors: number;
  width: number;
  height: number;
  
}
