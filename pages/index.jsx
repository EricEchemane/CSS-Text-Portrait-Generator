import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { ThemeContext } from '../context_hooks/ThemeContext';

import Navbar from '../comps/Navbar';

export default function Home() {

  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Box id='main-cont'>
      <Navbar />
    </Box>
  );
}