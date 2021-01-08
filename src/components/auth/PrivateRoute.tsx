import React, { FC, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { LangContext } from '../../context/lang';

import { RootState } from '../../store';
import Header from '../sections/Header/Header';
import Sidebar from '../sections/Sidebar/Sidebar';

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const { dispatch: { translate }} = useContext(LangContext);
  return (
    <>
      <Header component={Sidebar}/>
      <Route {...rest} render={props => authenticated ? <Component translate={translate} {...props} /> : <Redirect to='/signin' />}></Route>
    </>
  )
}

export default PrivateRoute;
