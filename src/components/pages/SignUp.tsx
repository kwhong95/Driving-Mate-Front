import React, { FC, FormEvent, Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setError, signup } from '../../store/actions/authActions';

import Button from '../UI/Button';
import Input from '../UI/Input';
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
      <section className="section">
        <div className="container">
          <h2 className="has-text-centered is-size-2 mb-3">{translate('sign up')}</h2>
          <form className="form" onSubmit={submitHandler}>
            {error && <Message type="danger" msg={error} />}
            <Input
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.currentTarget.value)}
              placeholder={translate('first name')}
              label={translate('first name')}
            />
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
            <Button text={loading ? translate('loading') : translate('sign up')} className="is-primary is-fullwidth mt-5" disabled={loading} />
          </form>
        </div>      
      </section>
    </Fragment>
  )
}

export default Signup;
