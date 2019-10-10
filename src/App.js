import React, { Component } from 'react';
import './App.css';
import img from './img/logov4.svg';
import Board from './Board/Board.jsx';
import Table from './Table/Table.jsx';
import Menu from './Menu/Menu.jsx';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedItem: [] }
  }

  onProductSelected = (product) => {
    this.setState({ selectedItem: [...this.state.selectedItem, product] })
  }

  deleteEvent = (index)=> {
    const deletedPost = Object.assign([], this.state.selectedItem);
    deletedPost.splice(index, 1);
    this.setState({
      selectedItem: deletedPost
    })
  }

  render() {
    return (
      <div className="mainContainer">

        <div className="App-header">
          <img src={img} className="App-logo" alt="logo" />
          <h1>Ciboulette</h1>
          <h3>-Café-</h3>
        </div>

        <div className="bodyApp">
          <div className="createOrder">
            <Table/>
          </div>
          <div className="menuList">
            <Menu onProductSelected={this.onProductSelected}/>
          </div>
          <div className="orderBoard">
            <Board selectedItem={this.state.selectedItem} deleteEvent={this.deleteEvent}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;