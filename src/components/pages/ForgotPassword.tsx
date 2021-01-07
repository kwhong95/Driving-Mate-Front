import React, { FC, FormEvent, Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { sendPasswordResetEmail, setError, setSuccess } from '../../store/actions/authActions';

import Button from '../UI/Button';
import Input from '../UI/Input';
import Message from '../UI/Message';

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
      <section className="section">
        <div className="container">
          <h2 className="has-text-centered is-size-2 mb-3">{translate('reset password')}</h2>
          <form className="form" onSubmit={submitHandler}>
            {error && <Message type="danger" msg={error} />}
            {success && <Message type="success" msg={success} />}
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder={translate('email address')}
              label={translate('email address')}
            />
            <Button text={loading ? translate('loading') : translate('send password reset email')} className="is-primary is-fullwidth mt-5" disabled={loading} />
          </form>
        </div>      
      </section>
    </Fragment>
  )
}

export default ForgotPassword;

