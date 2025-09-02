import { useState, useEffect } from 'react';
import Sun from '../assets/sun-fill.svg';
import Moon from '../assets/moon-stars-fill.svg';

const ThemeToggle = () => {
  const iconForm = (image: string) =>{
    return <img src={image} alt={image} className='theme_filter' />;
  }
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button onClick={handleToggle}>
      {theme === 'dark' ? iconForm(Moon) : iconForm(Sun)}
    </button>
  );
};

export default ThemeToggle;
