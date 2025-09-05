import React, { useState } from 'react';
import { type TileData, type Tileset, BlockColors } from './types';
import {createRandomBoard,collapseToCenter, applyGravity, findConnectedTiles, changeGroupOfTiles, copyBoard, scoreSetTiles} from './logic/BoardLogic';
import Board from './components/Board';

const Game: React.FC = () => {
  const width: number = 7;
  const height: number = 9;
  const [board, setBoard] = useState<Tileset>(createRandomBoard(width, height));
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
        return collapseToCenter(applyGravity(tempBoard))
      });
      setScore(prev=>prev + scoreSetTiles(tilesToChange))
    }
  };

  const handleReset = () => {
    setBoard(createRandomBoard(7, 9));
    setScore(0);
  };

  return (
    <div className='flex flex-col items-center gap-4 p-6'>
      <h1 className='text-2xl font-bold'>Collapse Clone</h1>
      <div className='text-lg'>Score: {score}</div>
      <Board board={board} onTileClick={handleTileClick} />
      <button
        onClick={handleReset}
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow'>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
