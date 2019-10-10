import React, { Component } from 'react';
import './Board.css';


class Board extends Component {

	render() {
		return (
			<div className="orderSection">

				<div className="order" >
					{this.props.selectedItem.map((element, index) => {
						console.log(element.name, element.price)
						return (<li> {element.name} {element.price}
							{<button key={element.id} className="removeButton" onClick={() =>
								this.props.deleteEvent(index)}
								>X</button>}</li>)
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




//<div className="order">{this.props.selectedItem.name}  {this.props.selectedItem.price}</div>