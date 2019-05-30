import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './composition/STORE'
import App from './composition/App';

ReactDOM.render(
  <App store={STORE} />,
  document.getElementById('root'),
);