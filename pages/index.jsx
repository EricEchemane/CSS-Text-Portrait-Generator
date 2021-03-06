import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

import Navbar from '../comps/Navbar';
import Toolbar from '../comps/Toolbar';
import { Paper } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { PortraitContext } from '../context_hooks/PortraitContext';

import Head from 'next/head';

export default function Home() {

  const mobileDevice = useMediaQuery("(max-width: 600px)");

  const {
    image, lyrics, fontSize, brightness, bgSize,
    handleBgSizeChange,
    handleLyricsChange,
    handleBrightnessChange,
    handleFontSizeChange,
    inputImage
  } = useContext(PortraitContext);

  const [lyricInputShown, setLyricInputShown] = useState(false);
  const [adjustmentShown, setAdjustmentShown] = useState(false);

  const imgInputRef = useRef();
  const containerRef = useRef();

  function chooseImage() {
    imgInputRef.current.click();
  }

  return <>
    <Head>
      <title> EEs Css Portrait Generator </title>
      <meta name='keywords' content='css portrait, css portrait, css image portrait, css text portrait image download, eric echemane' />
      <meta name='description' content='CSS Text Portrait Generator.' />
      <meta name="google-site-verification" content="cv75ZHNz7htkEl7Jtz5cwdGNEjj55mOtrjIdG6DGBPo" />
      <link rel="author" href="https://github.com/EricEchemane/CSS-Text-Portrait-Generator" />
    </Head>

    <Box id='main-cont' p={1} pb={2}>
      <Navbar />

      <Box my={1} p={mobileDevice ? 1 : 4} sx={{ backdropFilter: 'invert(5%)', borderRadius: '.3rem' }} >

        <Paper
          elevation={0}
          id='image-container'
          area-label='Image portrait container'>

          <Slide
            direction="up"
            in={lyricInputShown}
            container={containerRef.current}
            sx={{ backdropFilter: 'blur(25px)', zIndex: 10, width: '300px' }}>
            <Box display='flex' flexDirection='column' gap='1rem'>
              <TextField
                id="filled-multiline-static"
                label="Paste your lyrics here"
                multiline
                rows={10}
                variant="filled"
                onChange={handleLyricsChange}
              />
              <Button fullWidth variant='contained' onClick={() => setLyricInputShown(false)}> Done </Button>
            </Box>
          </Slide>

          <Slide
            direction="up"
            in={adjustmentShown}
            container={containerRef.current}
            sx={{ backdropFilter: 'blur(25px)', zIndex: 10, width: '300px' }}>

            <Box display='flex' flexDirection='column' gap='1rem' p={2}>

              <Box display='grid' gridTemplateColumns='1fr 3fr' alignItems='center' gap='.5rem'>
                <Typography variant='caption'>Brightness</Typography>
                <Slider marks min={1} step={.2} max={2.5} value={brightness} onChange={handleBrightnessChange} valueLabelDisplay="auto" />
              </Box>

              <Box display='grid' gridTemplateColumns='1fr 3fr' alignItems='center' gap='.5rem'>
                <Typography variant='caption'>Font size</Typography>
                <Slider marks min={.2} step={.1} max={1} value={fontSize} onChange={handleFontSizeChange} valueLabelDisplay="auto" />
              </Box>

              <Box display='grid' gridTemplateColumns='1fr 3fr' alignItems='center' gap='.5rem'>
                <Typography variant='caption'> Image size</Typography>
                <Slider min={90} step={1} max={300} value={bgSize} onChange={handleBgSizeChange} valueLabelDisplay="auto" />
              </Box>

              <Button fullWidth variant='contained' onClick={() => setAdjustmentShown(false)}> Done </Button>
            </Box>
          </Slide>

          <input onChange={inputImage} type="file" accept='image/*' id='image-input' ref={imgInputRef} hidden />
          {image == null && <Button color='secondary' onClick={chooseImage} id='choose-img-btn' variant='contained' sx={{ zIndex: 2 }}> Choose Image </Button>}

          <p
            style={{
              backgroundImage: image != null ? `url("${image}")` : '',
              fontSize: `${fontSize}rem`,
              filter: `brightness(${brightness})`,
              backgroundSize: `auto ${bgSize}%`
            }}
            id='text'>
            {
              [...Array(200)].map((n, index) => (
                <React.Fragment key={index}> {lyrics} </React.Fragment>
              ))
            }
          </p>
        </Paper>

      </Box>

      <Toolbar chooseImage={chooseImage} openLyricEditor={setLyricInputShown} openAdjustment={setAdjustmentShown} />
    </Box>
  </>;
}