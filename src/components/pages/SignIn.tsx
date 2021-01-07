import React, { FC, FormEvent, Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { setError, signin } from '../../store/actions/authActions';

import Button from '../UI/Button';
import Input from '../UI/Input';
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
    setLoading(true);
    dispatch(signin({ email, password }, () => setLoading(false)));
  }

  return (
    <Fragment>   
      <section className="section">
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
      </section>
    </Fragment>
  )
}

export default SignIn;
