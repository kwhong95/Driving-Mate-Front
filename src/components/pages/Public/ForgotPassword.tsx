import { FormControl, Grid, InputAdornment, TextField, Typography, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { FC, FormEvent, Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { sendPasswordResetEmail, setError, setSuccess } from '../../../store/actions/authActions';

import Message from '../../UI/Message';

interface ForgotPasswordProps {
  translate: (key: string) => string;
}

const ForgotPassword: FC<ForgotPasswordProps> = ({ translate }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
      if(success) {
        dispatch(setSuccess(''));
      }
    }
  }, [error, success, dispatch]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (success) {
      dispatch(setSuccess(''));
    }
    if (error) {
      dispatch(setError(''));
    }
    setLoading(true);
    await dispatch(sendPasswordResetEmail(email, 'Email sent!'));
    setLoading(false);
  }
  
  return (
    <Fragment>   
      <Grid container style={{ minHeight: "100vh", alignItems: "center"}}>
        <Grid item xs={12} sm={6} justify="center">
          <img
            src="https://i.pinimg.com/564x/48/a8/54/48a8544c6dd6b96126533daf1b6fdbfc.jpg"
            style={{ width: '100%', height: "100vh", objectFit: "cover" }}
            alt="brand"
          />
        </Grid>
        <Grid item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{ padding: 10 }}>
          <div />
          <div style={{ display: 'flex', flexDirection:'column', maxWidth: 400, minWidth: 300, marginLeft: 35 }}>
            <Grid container justify="center">
              <Typography style={{ width: '200' }}>Logo</Typography>
            </Grid>
            <FormControl>
            {error && <Message type="danger" msg={error} />}
            {success && <Message type="success" msg={success} />}
              <TextField 
                type="email"
                label="Email" 
                margin="normal" 
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <div style={{ height: 20 }} />
            <Button 
              color="primary" 
              variant="contained" 
              onClick={submitHandler} 
              disabled={loading}
            >
              {loading ? "Loading" : "Send Email"}
            </Button>
            <div style={{ height: 20 }} />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default ForgotPassword;

