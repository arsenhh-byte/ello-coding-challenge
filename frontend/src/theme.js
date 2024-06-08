import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5ACCCC', // Turquoise
    },
    secondary: {
      main: '#F76A34', // Orange Red
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  spacing: 8,
});

export default theme;
