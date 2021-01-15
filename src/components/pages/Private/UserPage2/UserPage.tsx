import { Avatar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import React, { FC, useEffect } from 'react'
import { RiLogoutBoxFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { setSuccess, signout } from '../../../../store/actions/authActions';
import { Container, StyledAppBar, useStyles } from './userPageElements';

const UserPage: FC = () => {
  const classes = useStyles();
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return (
    <>
      <Container>
        <div className={classes.grow}>
          <StyledAppBar>
            <Toolbar>
              <IconButton style={{ color: '#fff' }}>Logo</IconButton>
              <div className={classes.grow} />
              <IconButton style={{ color: '#fff' }}><Settings/></IconButton>
              <IconButton style={{ color: '#fff' }} onClick={logoutClickHandler}><RiLogoutBoxFill/></IconButton>
              <Avatar alt="UserImg" className={classes.small} />
              <Typography variant="body1">{user?.firstName}</Typography>
             </Toolbar>
          </StyledAppBar>
        </div>
      </Container>
    </>
  )
}

export default UserPage
