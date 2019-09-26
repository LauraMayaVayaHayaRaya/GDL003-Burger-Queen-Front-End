//import React from 'react';
import React, { Component } from 'react';
import './App.css';
import img from './img/logov5.svg';
import Board from './Board/Board';
import Menu from './Menu/Menu';

//function App() {
class App extends Component {
  render () {
    return (
      <div className="mainContainer">
        <div className="App-header">
          <img src={img} className="App-logo" alt="logo"/>
          <h1>Ciboulette</h1>
        </div>
        <div className="menuList">
          <Menu/>
        </div>
        <div className="orderBoard">
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
