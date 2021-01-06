import React, { FC, useState } from 'react'
import clsx from 'clsx';
import { AppBar, Button, CssBaseline, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { signout } from '../../../store/actions/authActions';

import { useStyles } from './styles';
import Sidebar from '../Sidebar/Sidebar';

const Header: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link to={!authenticated ? "/" : "/dashboard"}>Driving Mate</Link>
          </Typography>
          {
            !authenticated ? <div className="buttons">
              <Button onClick={() => history.push('/signup')}>Sign up</Button>
              <Button onClick={() => history.push('/signin')}>Sign in</Button>
            </div>
            :
            <Button onClick={logoutClickHandler}>Sign out</Button>
          }
        </Toolbar>
      </AppBar>
      <Sidebar open={open} handleClose={handleClose} />
    </div>
  )
}

export default Header;
