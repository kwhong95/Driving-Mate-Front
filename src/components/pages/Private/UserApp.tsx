import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { FC } from 'react'
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import GlobalStyles from './components/GlobalStyles';

const UserApp: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default UserApp;
