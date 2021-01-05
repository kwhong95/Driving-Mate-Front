import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom'
import { RootState } from '../../store';
import { signout } from '../../store/actions/authActions';
import Button from '../UI/Button';

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return (
    <nav className="navbar is-spaced has shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to={!authenticated ? "/" : "/dashboard"}>AppName</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-items">
            {!authenticated ? <div className="buttons">
                <Button text="Sign up" onClick={() => history.push('/signup')} className="is-primary" />
                <Button text="Sign in" onClick={() => history.push('/signin')} />
              </div>
              :
              <Button text="Sign out" onClick={logoutClickHandler} />
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
