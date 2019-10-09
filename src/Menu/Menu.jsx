import React, { Component } from 'react';
import './Menu.css';
import menuJson from './MenuJson'
//function Board () {
class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = { subcategory: [], selectedItem: {} }
	}

	render() {

		return (
			<div className="Menu">
				<p>Menú</p>
				<div className="menuPrincipal">
					{menuJson.categories.map((product, i) =>
						<button
							key={i}
							onClick={() => this.setState({ subcategory: product.subcategories })} >
							{product.name}
						</button>)
					}
				</div>
				<div className="subMenu">
					{
						this.state.subcategory ?
							this.state.subcategory.map((product, i) =>
								<button
									key={i}
									onClick={() => this.props.onProductSelected(product)}>
									{product.name}
								</button>)
							: null
					}
				</div>
			</div>
		);
	}
}

export default Menu;