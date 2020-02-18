import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/';
import Main from './components/main/';
import './css/theme.css';

render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
), document.getElementById('root'));

