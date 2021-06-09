import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import CreateUserComponent from './components/CreateUserComponent';
import { LayoutComponent } from './components/LayoutComponent';
import NavBarComponent from './components/NavBarComponent'
import { WelcomeComponent } from './components/WelcomeComponent';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginComponent}></Route>
            <Route path="/home" component={WelcomeComponent}></Route>
         </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
