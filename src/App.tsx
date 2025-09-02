import { Routes, Route } from 'react-router';
import './App.css';
import Home from './homepage/Home';
import Layout from './layout';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
