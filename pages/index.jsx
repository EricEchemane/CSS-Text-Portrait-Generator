import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { ThemeContext } from '../context_hooks/ThemeContext';

export default function Home() {

  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Box py={2} className='cont'>
      <Button variant='contained' onClick={toggleTheme}> Toggle Theme </Button>
    </Box>
  );
}