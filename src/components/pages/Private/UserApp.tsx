import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

const UserApp: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GloblaStyles />
      {routing}   
    </ThemeProvider>
  )
}

export default UserApp;
