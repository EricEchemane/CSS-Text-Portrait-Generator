import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import useThemeContext from '../context_hooks/ThemeContext';

function MyApp({ Component, pageProps }) {

  const { theme, setTheme, ThemeContext } = useThemeContext();

  /* cpg = css portrait generator */
  const cpgTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: '#cc00ff',
      },
      secondary: {
        main: '#ff005d',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 800,
        lg: 1000,
        xl: 1200,
        xxl: 1536,
      },
    },
  });

  return <>
    <ThemeProvider theme={cpgTheme}>

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeContext.Provider>

    </ThemeProvider>
  </>;
}

export default MyApp;
