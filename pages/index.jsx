import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import Navbar from '../comps/Navbar';
import Toolbar from '../comps/Toolbar';
import { Paper } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { PortraitContext } from '../context_hooks/PortraitContext';

import Head from 'next/head';

export default function Home() {

  const mobileDevice = useMediaQuery("(max-width: 600px)");

  const { state, setState } = useContext(PortraitContext);
  const [image, setImage] = useState(null);

  const imgInputRef = useRef();

  function chooseImage() {
    imgInputRef.current.click();
  }

  function captureImage() {

  }

  function inputImage() {
    const input = document.getElementById('image-input');
    const img = input.files[0];
    if (img) {
      const src = URL.createObjectURL(img);
      setImage(src);
    }
  }

  return <>
    <Head>
      <title> CSS Text Portrait Generator by Eric Echemane </title>
      <meta name='keywords' content='css, portrait, css portrait, css image portrait, css text portrait image download, eric echemane' />
      <link rel="author" href="https://github.com/EricEchemane/CSS-Text-Portrait-Generator" />
    </Head>

    <Box id='main-cont' p={1}>
      <Navbar />

      <Box my={1} p={mobileDevice ? 2 : 4} sx={{ backdropFilter: 'invert(5%)', borderRadius: '.3rem' }} >

        <Paper
          elevation={0}
          id='image-container'
          area-label='Image portrait container'>

          <input onChange={inputImage} type="file" accept='image/*' id='image-input' ref={imgInputRef} hidden />

          {image == null && <Button color='secondary' onClick={chooseImage} type='submit' variant='contained' sx={{ zIndex: 2 }}> Choose Image </Button>}

          <p
            style={{
              backgroundImage: image != null ? `url("${image}")` : ''
            }}
            id='text'>
            {
              [...Array(100)].map((n, index) => (
                <React.Fragment key={index}> {state.lyrics.text} </React.Fragment>
              ))
            }
          </p>
        </Paper>

      </Box>

      <Toolbar chooseImage={chooseImage} />
    </Box>
  </>;
}