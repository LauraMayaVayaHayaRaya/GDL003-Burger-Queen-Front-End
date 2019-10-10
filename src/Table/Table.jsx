import React, { Component } from 'react';
import './Table.css';
import './Table.js';

class Table extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			value: '',
			tables: []
		}
	}

	onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

	onAddItem = () => {
    this.setState(state => {
      const tables = state.tables.concat(state.value);
      return {
        tables,
        value: '',
      };
    });
  };

	render () {
		return(
			<div className="tableSection">

				<div className="asignTableNumber">
					
						<input type="number" min="0" max="5" id="table" placeholder="Mesa" value={this.state.value} required
						onChange={this.onChangeValue}/>
						<button className="buttonOpenTable" disabled={!this.state.value} onClick={this.onAddItem}>ABRIR CUENTA</button>
					
				</div>


				<div className="openTables">
				{this.state.tables.map(table => (
            <button className="categoriesButton" key={table}>MESA {table}</button>
          ))}
				</div>

			</div>
		);
	}
}

export default Table;
