import React, { Component } from 'react';
import logo from './resources/logo.gif';
import './App.css';
import './index.css';
import Navbar from './components/navbar.js'
import CenterDiv from './components/centerDiv.js'
import Footer from './components/footer.js'
import VideoComponent from './components/VideoPlayer.js'
import HowToText from './components/HowToText.js'

class App extends Component {
  render() {
    return (
      <div className="App"><div>
        <Navbar />
          <header className="App-header">
        </header>
        <br></br><br></br><br></br><br></br><div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
          <div class="w3-display-middle" style={{whiteSpace:'nowrap'}}></div>
          <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">Code <span class="w3-hide-small">Monkey</span><span style={{color: 'red'}}> Dojo</span></span></div>
          <br></br><br></br><br></br><img src={logo} className="App-logo" alt="logo" /><br></br>
          <div class="block"><h1 style={{background: 'rgba(0, 0, 0, 0.7'}} className="App-title">Pete, Data, Chepe and Pancho Working!</h1>
        <p style={{background: 'rgba(0, 0, 0, 0.7'}} className="App-intro">
          All Rights Reserved
        </p></div>
        <CenterDiv />
        <HowToText />
        <VideoComponent />
      </div>
        <Footer />
      </div>
    );
  }
}

export default App;
