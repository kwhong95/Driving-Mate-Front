import { Button, FormControl, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import { AccountCircle, LockRounded, Face} from '@material-ui/icons';
import React, { FC, FormEvent, Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setError, signup } from '../../store/actions/authActions';
import Message from '../UI/Message';

interface SignupProps {
  translate: (key: string) => string;
}

const Signup: FC<SignupProps> = ({ translate }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    dispatch(signup({ email, password, firstName }, () => setLoading(false)));
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
              <TextField 
                type="text"
                label="FirstName" 
                margin="normal" 
                onChange={(e) => setFirstName(e.currentTarget.value)}
                value={firstName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Face />
                    </InputAdornment>
                  ),
                }}
              />
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
              <TextField 
                type="password"
                label="Password" 
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded />
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
              {loading ? "Loading" : "Sign Up"}
            </Button>
            <div style={{ height: 20 }} />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Signup;
