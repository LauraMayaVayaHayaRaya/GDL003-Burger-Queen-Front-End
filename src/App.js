//import React from 'react';
import React, { Component } from 'react';
import './App.css';
import img from './img/photoApp.svg';
import Board from './Board/Board.jsx';
import Table from './Table/Table.jsx';
import Menu from './Menu/Menu.jsx';


//function App() {
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


  deleteEvent = (index) => {
    const deletedPost = Object.assign([], this.state.selectedItem);
    deletedPost.splice(index, 1);
    this.setState({
      selectedItem: deletedPost
    })
  }

  addPrice = (element) => {
    let suma = 0;
    
    const items = this.state.selectedItem;

    for (let index = 0; index < items.length; index++) {
    
      suma += (parseInt(items[index].price));
      //score.push(added[index].price)
    
    }
    this.setState({
      price: suma
    })


    return;

  };

  /*added.forEach(function (d) {
    if (d.price > 1) {
      score = [d.price] 
    } else {
    }

var sum = score.reduce(function(acc, cur) { return acc + cur; });
    console.log(sum)
    ;
  })

};

*/

  /*const previousNotes=this.state.selectedItem;
      for(let i=0; i<previousNotes.length; i++){
        if(previousNotes[i].id === key){
          previousNotes.splice(i, 1);
      }
         }}
  
  */



  /* removeIt = (quitProduct) => {
     [...this.state.selectedItem].map((quitProduct) => {
       for (let i = 0; i <  [...this.state.selectedItem].length; i++) {
         if ( [...this.state.selectedItem][i].id ===  [...this.state.selectedItem]){
           [...this.state.selectedItem].splice(i, 1);
           console.log(quitProduct)
         }
 
       }
       })
     }
 */



  render() {
    console.log(this.state.price)
    return (
      <div className="mainContainer" >
        <div className="App-header">
          <img src={img} className="App-logo" alt="logo" />
          <h1>APP NAME</h1>
        </div>
        <div className="bodyApp">
          <div className="createOrder">
            <Table />
          </div>
          <div className="menuList">
            <Menu onProductSelected={this.onProductSelected} />
          </div>
          <div className="orderBoard">
            <Board
              selectedItem={this.state.selectedItem}

              deleteEvent={this.deleteEvent}

              addPrice={this.state.price}


            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;