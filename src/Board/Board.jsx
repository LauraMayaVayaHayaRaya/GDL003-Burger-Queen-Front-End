import React, { Component } from 'react';
import './Board.css';


class Board extends Component {

	render() {
		return (
			<div className="orderSection">

				<div className="order" >
					{this.props.selectedItem.map((element, index) => {
						console.log(element.name, element.price)
						return (<li className="productsOrder" key={element.id}> {element.name} {element.price}
							{<button key={element.id} className="remove" onClick={() =>
								this.props.deleteEvent(index)}

							
							>Remove It</button>}  </li>)

					})}


				</div>

				<div className="orderButtons">
					<p>Total: $ {this.props.addPrice}.00</p>
					<button className="printCheck">IMPRIMIR CUENTA</button>
					<button className="closeCheck"> CERRAR CUENTA</button>
				</div>

			</div>
		);
	}
}

export default Board;




