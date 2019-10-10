import React, { Component } from 'react';
import './Table.css';
import './Table.js';

class Table extends Component {
	render () {
		return(
			<div className="tableSection">

				<div className="asignTableNumber">
					<form>
						<input type="number" min="0" max="5" id="table" placeholder="Mesa" required/>
					</form>
				</div>

				<div className="createOrderByTable">
					<button className="buttonOpenTable">ABRIR CUENTA</button>
				</div>

				<div className="openTables"></div>

			</div>
		);
	}
}

export default Table;
