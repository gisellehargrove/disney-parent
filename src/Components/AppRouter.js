import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const checkLocalStorage = () => {
  if(localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
}

const AppRouter = () => {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={(props) => {
          if(localStorage.getItem('token')) {
            return <Redirect to="/home" />
          } else {
            return <Login history={props.history}/>
          }
        }}  />
      <Route
        path="/signup"
        render={(props) => {
          return <Signup history={props.history} />
        }} />
      <Route
        path="/home"
        render={(props) => {
          if(!checkLocalStorage()) {
            return <Redirect to="/" />
          } else {
            return <Home />
          }
        }} />
    </Router>
  );
};

export default AppRouter;
