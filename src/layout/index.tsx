import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Outlet } from 'react-router';

export default function Home() {
  return (
    <div className='bg-background text-primary flex flex-col justify-center items-center'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
