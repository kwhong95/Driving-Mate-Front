import { Avatar, Divider, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Settings, ArrowLeft, ArrowRight } from '@material-ui/icons';
import clsx from 'clsx';
import React, { FC, useEffect, useState } from 'react'
import { RiLogoutBoxFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { RootState } from '../../../../store';
import { setSuccess, signout } from '../../../../store/actions/authActions';
import Analysis from '../Analysis/Analysis';
import UserDashboard from '../Dashboard/UserDashboard';
import { Container, LogoWrap, StyledAppBar, ToolbarIconWrap, useStyles } from './userPageElements';
import MenuList from './components/MenuList';

interface UserPageProps {
  match : any;
}

const UserPage: FC<UserPageProps> = () => {
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
    <>
      <Container>
          <StyledAppBar>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
              <LogoWrap>
                <IconButton className={classes.icon}>Logo</IconButton>
              </LogoWrap>
              <ToolbarIconWrap>
                <IconButton className={classes.icon}><Settings/></IconButton>
                <IconButton className={classes.icon} onClick={logoutClickHandler}><RiLogoutBoxFill/></IconButton>
                <Avatar alt="UserImg" className={classes.small} />
                <Typography variant="body1">{user?.firstName}</Typography>
              </ToolbarIconWrap>
             </Toolbar>
          </StyledAppBar>
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
          <Divider />
            <MenuList open={open}/>
            <Divider light />
            <IconButton style={{ bottom: '0' }} onClick={handleDrawer}>
              {open ? 
              <ArrowLeft className={classes.icon} />
              :
              <ArrowRight className={classes.icon}/>
              }
            </IconButton>
        </Drawer>
        <Route path='/userpage/dashboard' exact component={UserDashboard} />
        <Route path='/userpage/analysis' exact component={Analysis} />
      </Container>
    </>
  )
}

export default UserPage
