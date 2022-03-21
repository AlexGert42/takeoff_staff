import '@styles/index.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './context';
import { App } from '@components/layout';

ReactDOM.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </Provider> */}
  </BrowserRouter>,
  document.getElementById('root')
);
