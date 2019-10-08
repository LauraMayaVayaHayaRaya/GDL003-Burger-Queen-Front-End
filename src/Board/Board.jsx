//import React from 'react'
import React, { Component } from 'react';
import './Board.css';
//import { tsExportAssignment } from '@babel/types';

//function Board () {
class Board extends Component {

	


	render() {
		return (
			<div className="orderSection">
				<button className="table">MESA</button>

				<div className="order" >
					{this.props.selectedItem.map((element, index) => {
						console.log(element.name, element.price)


						return (<li> {element.name} {element.price}
							{<button key={element.id} className="remove" onClick={() =>
								this.props.deleteEvent(index)}

							//this.props.selectedItem.splice(element, 1)
							>Remove It</button>} {this.props.addPrice()} </li>)

					})}


				</div>

				<div className="orderButtons">

					<button className="printCheck">IMPRIMIR CUENTA</button>
					<button className="closeCheck"> CERRAR CUENTA</button>

				</div>
			</div>


		);
	}
}

export default Board;




