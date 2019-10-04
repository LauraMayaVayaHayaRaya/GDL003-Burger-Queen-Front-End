import React, { Component } from 'react';
import './Menu.css';
import MenuCategories from './Menu.json';

//function Board () {
class Menu extends Component {
	render () {
		let children='';
		let menuItems = MenuCategories.menu.categories;
		function addToBoard(children){
		}
		function showChildren(parent){
			let menuItems = MenuCategories.menu.categories[parent].children;
			console.log(menuItems);
			children = (
				<div>
					{Object.keys(menuItems).map((v)=>
					<button key={v} onClick={()=>addToBoard(v)}>{menuItems[v].name}</button>)}
				</div>
			)
		}
		return (
			<div className="Menu">
				<p>Menú</p>
				<div className="parentMenu">
				{Object.keys(menuItems).map((v)=>
				<button key={v} onClick={()=>showChildren(v)}>{menuItems[v].name}</button>)}
				</div>
				<div className="childrenMenu">
					{children}
				</div>
			</div>
		);
	}
}

export default Menu;