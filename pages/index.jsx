import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import Navbar from '../comps/Navbar';
import Toolbar from '../comps/Toolbar';
import { Paper } from '@mui/material';

export default function Home() {

  const mobileDevice = useMediaQuery("(max-width: 600px)");

  return (
    <Box id='main-cont' p={1}>
      <Navbar />

      <Box my={1} p={mobileDevice ? 2 : 8} sx={{ backdropFilter: 'invert(5%)', borderRadius: '.3rem' }} >

        <Paper
          sx={{ borderRadius: '.5rem' }}
          elevation={2}
          id='image-container'
          area-label='Image portrait container'>

          <Button color='secondary' sx={{ color: 'text.secondary' }}> Tap to upload image </Button>
        </Paper>

      </Box>

      <Toolbar />
    </Box>
  );
}