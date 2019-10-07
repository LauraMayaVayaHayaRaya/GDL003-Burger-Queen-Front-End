//import React from 'react';
import React, { Component } from 'react';
import './App.css';
import img from './img/photoApp.svg';
import Board from './Board/Board.jsx';
import Menu from './Menu/Menu.jsx';

//function App() {
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
    return (
      <div className="mainContainer" >
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
              deleteEvent={this.deleteEvent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
