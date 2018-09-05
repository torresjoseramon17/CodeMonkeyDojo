import React, { Component } from 'react';
import logo from './resources/logo.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pete,Data,Chepe and Pancho Working!</h1>
        </header>
        <p className="App-intro">
          All rights reserved <code>src/App.js</code> 
        </p>
      </div>
    );
  }
}

export default App;
