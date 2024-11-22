import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './Routes/Routes'

// const paginaatual = window.location.pathname === '/' ? <App/> : <Darkpage/>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router/>
    {/* <App /> */}
    {/* {paginaatual} */}
  </React.StrictMode>
)