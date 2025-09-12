import { useState, useEffect } from 'react';
import {Sun, Moon} from 'lucide-react';

const ThemeToggle = () => {
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
      {theme === 'dark' ? <Moon size={24} strokeWidth={1} /> : <Sun size={24} strokeWidth={1} />}
    </button>
  );
};

export default ThemeToggle;
