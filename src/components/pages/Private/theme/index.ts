import { createMuiTheme, colors } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.grey[900],
      paper: colors.grey[900],
    },
    primary: {
      main: colors.grey[800],
    },
    secondary: {
      main: colors.grey[700],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    }
  },
})

export default theme;