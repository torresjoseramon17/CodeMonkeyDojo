import React, { Component } from 'react';
import logo from './resources/logo.gif';
import './App.css';
import Navbar from './components/navbar.js'
import CenterDiv from './components/centerDiv.js'
//testing components jose t
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pete,Data,Chepe and Pancho Working!</h1>
        </header>
        <p className="App-intro">
          All rights reserved <code>src/App.js</code>
        </p>
        <CenterDiv />
      </div>
    );
  }
}

export default App;
