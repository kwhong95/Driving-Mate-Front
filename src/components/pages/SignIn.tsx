import React, { FC, FormEvent, Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, TextField, Button, InputAdornment, FormControl } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { setError, signin } from '../../store/actions/authActions';
import { AccountCircle, LockRounded } from '@material-ui/icons';

import Message from '../UI/Message';

interface SignInProps {
  translate: (key: string) => string;
}

const SignIn: FC<SignInProps> = ({ translate }) => {
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
    if (error) {
      dispatch(setError(''));
    }
      dispatch(signin({ email, password }, () => setLoading(false)));
      setLoading(true);
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
              {loading ? "Loading" : "Sign In"}
            </Button>
            <div style={{ height: 20 }} />
          </div>
          <Grid container spacing={2} style={{ marginLeft: 50 }}>
            <Grid item>
              <Link to="/signup">
                <Button>Interested in SignUp?</Button>
              </Link>
              <Link to="/forgot-password">
                <Button>Forgot Password?</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <section className="section">
        <div className="container">
          <h2 className="has-text-centered is-size-2 mb-3">{translate('sign in')}</h2>
          <form className="form" onSubmit={submitHandler}>
            {error && <Message type="danger" msg={error} />}
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder={translate('email address')}
              label={translate('email address')}
            />
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder={translate('password')}
              label={translate('password')}
            />
            <p><Link to="/forgot-password">{translate('forgot password')} ?</Link></p>
            <Button text={loading ? translate('loading') : translate('sign in')} className="is-primary is-fullwidth mt-5" disabled={loading} />
          </form>
        </div>      
      </section> */}
    </Fragment>
  )
}

export default SignIn;
