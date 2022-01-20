import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateCounter } from './contexts/StateCounter';
ReactDOM.render(
  <StateCounter>
    <App />
  </StateCounter>,
  document.getElementById('root')
);
