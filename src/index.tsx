import '@styles/index.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import { context } from '@context/index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from '@components/layout';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={context}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
