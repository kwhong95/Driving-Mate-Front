import { AppBar, createStyles, makeStyles, Theme, withStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.main`
  background: #1a1a1a;
  height: 100vh;
  display: flex;
`;

export const StyledAppBar = withStyles({
  root: {
    background: '#121212',
    height: '50px',
    position: 'static',
  },
})(AppBar);


export const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    grow: {
      flexGrow: 1,
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: "5px",
    }
  })
)