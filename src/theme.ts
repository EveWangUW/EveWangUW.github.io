import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Times New Roman", Times, serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Times New Roman", Times, serif',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Makes body fill the viewport
        },
      },
    },
  },
});

export default theme;
