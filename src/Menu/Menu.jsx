import React, { Component } from 'react';
import './Menu.css';

//function Board () {
class Menu extends Component {
	render () {
		return (
			<div className="Menu">
				<p>Menú</p>
				<button>BEBIDAS FRIAS</button>
				<button>BEBIDAS CALIENTES</button>
				<button>ALIMENTOS</button>
				<button>POSTRES</button>
			</div>
		);
	}
}

export default Menu;