import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import md5 from 'md5';

import AmChart from './Components/amChart';
import Chartjs from './Components/chartjs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={"https://www.gravatar.com/avatar/" + md5('haofu.zhu@sinefa.com') + ".jpg?s=64&d=mp"} alt=""/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AmChart/>
        <Chartjs/>        
      </div>
    );
  }
}

export default App;
