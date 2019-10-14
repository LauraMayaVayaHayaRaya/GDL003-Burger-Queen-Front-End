import React, { Component } from 'react';
import './App.css';
import img from './img/logov5.svg';
import Board from './Board/Board.jsx';
import Table from './Table/Table.jsx';
import Menu from './Menu/Menu.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedItem: [], price: 0 }
  }

  onProductSelected = (product) => {
    this.setState({
      selectedItem: [...this.state.selectedItem, product],
      price: this.state.price + parseInt(product.price)
      })
  }

  /*deleteEvent = (index)=> {
    const deletedPost = Object.assign([], this.state.selectedItem);
    deletedPost.splice(index, 1);
    this.setState({
      selectedItem: deletedPost
    })
  }*/

  deleteEvent = (index)=> {

    const deletedPost = Object.assign([], this.state.selectedItem);
    deletedPost.splice(index, 1);
    this.setState({
      selectedItem: deletedPost,
     
      price : this.state.price - parseInt(this.state.selectedItem[index].price)
    }) 
  }

  addPrice = (element) => {
    let suma = 0;
    const items = this.state.selectedItem;
    for (let index = 0; index < items.length; index++) {
      suma += (parseInt(items[index].price));
    }

    this.setState({
      price: suma
    })
    return;
  };
  eraseAll = (items) => {
    this.setState({
      selectedItem: []
    })
    alert("Tu orden se ha enviado a cocina")
  }
  render() {
    return (
      <div className="mainContainer">

        <div className="App-header">
          <img src={img} className="App-logo" alt="logo" />
          <h1>Ciboulette</h1>
        </div>

        <div className="bodyApp">
          <div className="createOrder">
            <Table />
          </div>

          <div className="menuList">
            <Menu onProductSelected={this.onProductSelected}/>
          </div>

          <div className="orderBoard">
            <Board
              selectedItem={this.state.selectedItem}
              deleteEvent={this.deleteEvent}
              addPrice={this.state.price}
              eraseAll={this.eraseAll}
            />
          </div>

        </div>
      </div>
    );
  }
}


export default App;