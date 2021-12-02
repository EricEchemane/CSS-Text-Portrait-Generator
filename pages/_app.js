import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: '#cc00ff',
    },
    secondary: {
      main: '#ff005d',
    },
  },
});

function MyApp({ Component, pageProps }) {

  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>;
}

export default MyApp;
