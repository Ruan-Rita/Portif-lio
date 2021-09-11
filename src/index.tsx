import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './GlobalStyles';
import Router from './Router'
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);


