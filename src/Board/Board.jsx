//import React from 'react'
import React, { Component } from 'react';
import './Board.css';
//import { tsExportAssignment } from '@babel/types';

//function Board () {
class Board extends Component {

	constructor(props) {
		super(props)
		//this.state = { product:[]}
	}
	
	
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
							>Remove It</button>}</li>)
							

					})}

	render() {
		return (
			<div className="orderSection">

				<div className="order" >
					{this.props.selectedItem.map((element) => {
						console.log(element.name, element.price)

						//key=element.key
						return (<li>{element.name}   {element.price}</li>)
					})

					}




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




//<div className="order">{this.props.selectedItem.name}  {this.props.selectedItem.price}</div>