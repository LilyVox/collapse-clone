import { Routes, Route } from 'react-router';
import './App.css';
import Layout from './layout';
import StartGame from './game/UI/StartGame';
import LevelSelect from './game/UI/LevelSelect';
import Game from './game/Game';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<StartGame />} />
      </Route>
      <Route path='/level-select' element={<Layout />}>
        <Route index element={<LevelSelect />} />
      </Route>
      <Route path='/game/:colors/:width/:height' element={<Layout />}>
        <Route index element={<Game />} />
      </Route>

    </Routes>
  );
}
