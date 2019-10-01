//import React from 'react'
import React, { Component } from 'react';
import './Board.css';

//function Board () {
class Board extends Component {
	constructor(props){
		super(props)
	}
	render () {
		return(
			<div className="orderSection">
				<button className="table">MESA</button>
				<div className="order"></div>
				<div className="orderButtons">
					<button className="kitchenAndBar">ENVIAR A COCINA</button>
					<button className="check">IMPRIMIR CUENTA</button>
				</div>
				<div>{this.props.selectedItem.price}</div>
			</div>
		);
	}
}

export default Board;




