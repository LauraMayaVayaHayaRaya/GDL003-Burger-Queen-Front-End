import React, { Component } from 'react';
import './Board.css';


class Board extends Component {
	render() {
		return (
			<div className="orderSection">

				<p className="amount">Total: $ {this.props.addPrice}.00</p>

				<div className="order" >
					{this.props.selectedItem.map((element, index) => {
						console.log(element.name, element.price)

						return (
						<div className="productsOrder" key={element.id}>
							<div className="productsOrderName">
							{element.name}
							</div>

							<div className="productsOrderPrice" >
							{element.price}
							</div>

							<div className="productsOrderRemove">
							{<button  key={element.id} className="remove" onClick={() =>
								this.props.deleteEvent(index)}
								>X</button>}
							</div>

						</div>)
					})}
				</div>

				<div className="orderButtons">
					<button className="printCheck">IMPRIMIR CUENTA</button>
					<button className="closeCheck" onClick={this.props.eraseAll} > ENVIAR ORDEN</button>
				</div>

			</div>
		);
	}
}

export default Board;

