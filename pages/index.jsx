import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box p={8}>
      <Button variant='contained'> Hello </Button>
      <Button color='secondary' variant='contained'> Hello </Button>
    </Box>
  );
}
