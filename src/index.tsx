import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './firebase/config';

import store from './store';
import LangState from './context/lang';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LangState>
        <App />
      </LangState>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);