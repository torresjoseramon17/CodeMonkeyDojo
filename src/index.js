import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import index.html from "./index.html";

function Welcome(props) {

  return <h1>ACERCA DE MI, {props.name}</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
