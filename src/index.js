import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
//import { AuthProvider } from './context/AuthContext';

console.log(process.env)

ReactDOM.render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);
