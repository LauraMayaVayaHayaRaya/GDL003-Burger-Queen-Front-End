//import React from 'react'
import React, { Component } from 'react';
import './Board.css';

//function Board () {
class Board extends Component {
	render () {
		return(
			<div className="orderSection">
				<div className="order"></div>
				<div className="orderButtons">
					<button className="printCheck">IMPRIMIR CUENTA</button>
					<button className="closeCheck">CERRAR CUENTA</button>
				</div>
			</div>
		);
	}
}

export default Board;