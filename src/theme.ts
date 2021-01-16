import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#90caf9',
      
    },
    secondary: {
      main: '#adb0bb'
    }
  },
  overrides: {
    MuiDrawer: {
      paper: {
        marginTop: '51px',
        background: '#282C34'
      }
    },
    MuiListItem: {
      root: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        boxSizing: 'border-box',
        textAlign: 'left',
        alignItems: 'center',
        paddingTop: '8px',
        paddingBottom: '8px',
        justifyContent: 'flex-start',
        textDecoration: 'none',
      }
    }
  },
})

theme = responsiveFontSizes(theme);


export default theme;