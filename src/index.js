import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios';
// Set the base URL globally for all axios requests
// Development server
// axios.defaults.baseURL = 'http://localhost:8000'; 
// Production server
axios.defaults.baseURL = 'https://jwt-auth-with-fastapi-and-react-js.onrender.com';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
