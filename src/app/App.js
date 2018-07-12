import React, { Component } from 'react';
// import logo from './logo.svg';
import AllStuffs from '../components/AllStuffs/AllStuffs';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import MyStuffs from '../components/MyStuffs/MyStuffs';
import Navbar from '../components/Navbar/Navbar';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <AllStuffs />
        <Home />
        <Login />
        <MyStuffs />
        <Navbar />
      </div>
    );
  }
}

export default App;
