import React, { Component } from 'react';
// import logo from './logo.svg';
import AllStuffs from '../components/AllStuffs/AllStuffs';
import Home from '../components/Home/Home';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import MyStuffs from '../components/MyStuffs/MyStuffs';
import Navbar from '../components/Navbar/Navbar';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';

import './App.css';

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render = {
        props => authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render = {
        props => authed === true ? (
          <Redirect
            to={{ pathname: '/mystuffs', state: {from: props.location}}}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

class App extends Component {
  state = {
    authed: true,
  };

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
            />
            <Switch>
              <Route path="/home" exact component={Home}/>
              <PublicRoute
                path="/register"
                authed={this.state.authed}
                component={Register}
              />
              <PublicRoute
                path="/login"
                authed={this.state.authed}
                component={Login}
              />
              <PrivateRoute
                path="/mystuffs"
                authed={this.state.authed}
                component={MyStuffs}
              />
              <PrivateRoute
                path="/allstuffs"
                authed={this.state.authed}
                component={AllStuffs}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
