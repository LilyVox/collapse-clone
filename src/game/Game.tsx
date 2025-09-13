import { useState } from 'react';
import { type Tileset, BlockColors, type convergeOptions } from './types';
import {
  createRandomBoard,
  collapseToCenter,
  applyGravity,
  findConnectedTiles,
  changeGroupOfTiles,
  copyBoard,
  scoreSetTiles,
} from './logic/BoardLogic';
import Board from './components/Board';
import { Button } from '@/components/ui/button';

const Game = ({ colors = 3 }: convergeOptions) => {
  const width: number = 7;
  const height: number = 9;
  const [board, setBoard] = useState<Tileset>(createRandomBoard(width, height, colors));
  const [score, setScore] = useState(0);

  const handleTileClick = (row: number, col: number) => {
    console.log('Clicked:', row, col);
    // 🔗 this is where the game logic goes (find group → remove → collapse → update score).
    // For now, just remove the clicked tile:d
    console.log('connected tiles', findConnectedTiles(board, row, col));
    const tilesToChange = findConnectedTiles(board, row, col);
    if (tilesToChange.length > 3) {
      setBoard((prev) => {
        const tempBoard = changeGroupOfTiles(copyBoard(prev), tilesToChange, BlockColors.empty);
        return collapseToCenter(applyGravity(tempBoard));
      });
      setScore((prev) => prev + scoreSetTiles(tilesToChange));
    }
  };

  const handleReset = (colors: number) => {
    setBoard(createRandomBoard(7, 9, colors));
    setScore(0);
  };

  return (
    <div className='flex flex-col items-center gap-4 p-6'>
      <h1 className='text-2xl font-bold montserrat-700'>Collapse Clone</h1>
      <div className='text-lg'>Score: {score}</div>
      <Board board={board} onTileClick={handleTileClick} />
      <Button
        onClick={() => {
          handleReset(colors);
        }}>
        Reset Game
      </Button>
    </div>
  );
};

export default Game;
