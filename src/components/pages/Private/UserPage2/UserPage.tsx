import { Avatar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import { Dashboard, Settings, ArrowLeft, ArrowRight } from '@material-ui/icons';
import clsx from 'clsx';
import React, { FC, useEffect, useState } from 'react'
import { RiLogoutBoxFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { setSuccess, signout } from '../../../../store/actions/authActions';
import { Container, StyledAppBar, useStyles } from './userPageElements';
import { theme } from './userPageElements';

const UserPage: FC = () => {
  const classes = useStyles();
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  const logoutClickHandler = () => {
    dispatch(signout());
  };

  const handleDrawer = () => {
    if ( open === true ) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className={classes.grow}>
          <StyledAppBar>
            <Toolbar>
              <IconButton className={classes.icon}>Logo</IconButton>
              <div className={classes.grow} />
              <IconButton className={classes.icon}><Settings/></IconButton>
              <IconButton className={classes.icon} onClick={logoutClickHandler}><RiLogoutBoxFill/></IconButton>
              <Avatar alt="UserImg" className={classes.small} />
              <Typography variant="body1">{user?.firstName}</Typography>
             </Toolbar>
          </StyledAppBar>
        </div>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <List>
              <ListItem button>
                <ListItemIcon><Dashboard className={classes.icon} /></ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>
            </List>
            <Divider light />
            <IconButton style={{ bottom: '0' }} onClick={handleDrawer}>
              {open ? 
              <ArrowLeft className={classes.icon} />
              :
              <ArrowRight className={classes.icon}/>
              }
            </IconButton>
          </div>
        </Drawer>
      </Container>
    </ThemeProvider>
  )
}

export default UserPage
