//import React from 'react'
import React, { Component } from 'react';
import './Board.css';

//function Board () {
class Board extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="orderSection">
				<button className="table">MESA</button>

				<div className="order" >
					{this.props.selectedItem.map((element) => {
						console.log(element.name, element.price)

						//key=element.key		 	
						return (<li>{element.name}</li>)
					})

					}



				</div>

				<div className="orderButtons">
					<button className="kitchenAndBar">ENVIAR A COCINA</button>
					<button className="check">IMPRIMIR CUENTA</button>
				</div>
			</div>


		);
	}
}

export default Board;




//<div className="order">{this.props.selectedItem.name}  {this.props.selectedItem.price}</div>