//import React from 'react'
import React, { Component } from 'react';
import './Board.css';

//function Board () {
class Board extends Component {
	render () {
		return(
			<div className="orderSection">
				<button>MESA</button>
				<div className="order">123</div>
				<button>COCINA Y BAR</button>
				<button>CUENTA</button>
			</div>
		);
	}
}

export default Board;