import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext'
import { AppProvider } from './context/AppContext'

ReactDOM.render(
  <AuthProvider>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </AuthProvider>,
  
  document.getElementById('root')
);

