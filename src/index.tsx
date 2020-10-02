import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import './gstyle.css';

import Routes from './Router';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

