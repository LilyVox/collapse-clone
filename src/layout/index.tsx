import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Outlet } from 'react-router';

export default function Home() {
  return (
    <div className='parallax flex flex-col justify-center'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
