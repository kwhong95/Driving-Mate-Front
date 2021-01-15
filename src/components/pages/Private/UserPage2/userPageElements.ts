import { AppBar, createMuiTheme, createStyles, makeStyles, Theme, withStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background: #1a1a1a;
  height: 100vh;
`;

export const StyledAppBar = withStyles({
  root: {
    background: '#121212',
    height: '50px',
  },
})(AppBar);

const drawerWidth = 200;

export const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    grow: {
      flexGrow: 1,
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: "5px",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      background: '#333333',
      color: '#fff',
      flexDirection: 'column',
    },
    icon: {
      color: '#fff',
    }
  })
)

export const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        marginTop: '55px',
        background: '#333333'
      }
    },
  }
})


