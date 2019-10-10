import React, { Component } from 'react';
import './Menu.css';
import menuJson from './MenuJson'

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = { subcategory: [], selectedItem: {} }
	}

	render() {

		return (
			<div className="Menu">
				<p>Menú</p>

			

				<div className="categoriesMenu">
					{menuJson.categories.map((product) =>
						<button className="categoriesButton"
							key={product.key}

							onClick={() => this.setState({ subcategory: product.subcategories })} >
							{product.name}
						</button>)
					}
				</div>
				<div className="subMenu">
					{
						this.state.subcategory ?

							this.state.subcategory.map((product) =>
								<button className="subMenuButton"
									key={product.key}

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