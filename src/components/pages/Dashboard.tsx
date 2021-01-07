import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSuccess } from '../../store/actions/authActions';
import Message from '../UI/Message';

const Dashboard: FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return (
    <section className="section">
      <div className="container">
        {needVerification && <Message type="success" msg="Please verify your email address." />}
        <h1 className="is-size-1">Welcome {user?.firstName}</h1>
        <iframe className="grafana-dashboard" title="My Dashboard by grafana" src="http://localhost:3000/d/WnnffF-Mz/new-dashboard-copy?orgId=1&from=1609835509452&to=1609835521780"></iframe>
      </div>
    </section>
  )
}

export default Dashboard;
