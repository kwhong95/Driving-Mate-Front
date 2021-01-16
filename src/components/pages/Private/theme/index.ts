import { createMuiTheme, colors } from '@material-ui/core';
import { shadows } from './shadow';
import { typography } from './typography';

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
  shadows,
  typography
})

export default theme;