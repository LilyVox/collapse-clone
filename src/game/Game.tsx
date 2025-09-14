/* eslint-disable no-constant-binary-expression */
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
import { useParams, Link } from 'react-router';

const defaultConOptions: convergeOptions = { colors: 3, width: 7, height: 11 };

const Game = () => {
  const { colors, width, height } = useParams();
  const { colors: dColors, width: dWidth, height: dHeight } = defaultConOptions;
  const [board, setBoard] = useState<Tileset>(
    createRandomBoard(Number(width)?? dWidth, Number(height)?? dHeight, Number(colors) ?? dColors)
  );
  const [score, setScore] = useState(0);

  const handleTileClick = (row: number, col: number) => {
    // console.log('Clicked:', row, col);
    // console.log('connected tiles', findConnectedTiles(board, row, col));
    if (board[row][col].color === BlockColors.empty) return;
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
    setBoard(createRandomBoard(Number(width)?? dWidth, Number(height)?? dHeight, Number(colors) ?? dColors));
    setScore(0);
  };

  return (
    <div className='flex flex-col items-center gap-4 p-6'>
      <h1 className='text-2xl font-bold montserrat-700'>Collapse Clone</h1>
      <div className='text-lg'>Score: {score}</div>
      <Board board={board} onTileClick={handleTileClick} />
      <div className='w-xs flex flex-row justify-between'>
        <Link to='/' className='cursor-pointer'>
          <Button>Back</Button>
        </Link>
        <Button
        className='z-[1]'
          onClick={() => {
            handleReset(Number(colors) ?? dColors);
          }}>
          Reset Game
        </Button>
      </div>
    </div>
  );
};

export default Game;
