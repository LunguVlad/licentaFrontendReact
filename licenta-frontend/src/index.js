import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './components/LoginComponent';
import CreateUserComponent from './components/CreateUserComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBarComponent } from './components/NavBarComponent';


ReactDOM.render(
  <React.StrictMode>
   
    <App></App>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
