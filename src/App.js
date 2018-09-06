import React, { Component } from 'react';
import logo from './resources/logo.gif';
import './App.css';
import './index.css';
import Navbar from './components/navbar.js'
import CenterDiv from './components/centerDiv.js'
import Footer from './components/footer.js'
import VideoComponent from './components/VideoPlayer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
          <div class="w3-display-middle" style={{whiteSpace:'nowrap'}}></div></div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pete, Data, Chepe and Pancho Working!</h1>
        </header>
        <p className="App-intro">
          All rights reserved
        </p>
        {/*}<CenterDiv />
        <VideoComponent />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
