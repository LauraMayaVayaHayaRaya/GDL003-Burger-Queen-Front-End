//import React from 'react';
import React, { Component } from 'react';
import './App.css';
import img from './img/photoApp.svg';
import Board from './Board/Board';
import Menu from './Menu/Menu.jsx';

//function App() {
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedItem: {} }
  }
  onProductSelected = (product) => {
    this.setState({ selectedItem: product})
  }


  render() {
    return (
      <div className="mainContainer">
        <div className="App-header">
          <img src={img} className="App-logo" alt="logo" />
          <h1>APP NAME</h1>
        </div>
        <div className="bodyApp">
          <div className="menuList">
            <Menu onProductSelected={this.onProductSelected} />
          </div>
          <div className="orderBoard">
            <Board
              selectedItem={this.state.selectedItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
