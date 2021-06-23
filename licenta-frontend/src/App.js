import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import CreateUserComponent from './components/CreateUserComponent';
import { LayoutComponent } from './components/LayoutComponent';
import NavBarComponent from './components/NavBarComponent'
import { WelcomeComponent } from './components/WelcomeComponent';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';

function App() {
  
  const [loggedIn,setLoggedIn] = useState(false)

  const handleLogin = () =>{
    console.log("HANDLELOGIN")
    if(loggedIn === false){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  }

  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" render=  { (handleLoginUser) => <LoginComponent handleLoginUser = {handleLogin} ></LoginComponent>}></Route> 
            {/* //<Route path="/administration" render={ (props) => <WelcomeComponent {...props}></WelcomeComponent> } ></Route> */}
            <ProtectedRoute path="/administration" component= {WelcomeComponent} loggedIn = {loggedIn}></ProtectedRoute>
         </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
