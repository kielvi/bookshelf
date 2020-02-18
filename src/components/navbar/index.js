import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import api from '../../api';


const Navbar = (props) => {
	const allCategories = api.categories.asArray.splice(1);

	return (
		<div className="navbar -justify_center">
			<Link to='/' className="navbar_logo"></Link>
{Date.now()}
			<ul className="navbar_menu">
				<li className="navbar_menu-item">
					<Link to='/' className="navbar_menu-link">
						<i className="navbar_menu-icon -home"></i>
						<div className="navbar_menu-label">Home</div>
					</Link>
				</li>

				{
					allCategories
						.sort((a,b) => a.name.localeCompare(b.name))
						.map((category, i) => {
						return (
						<li key={i} className='navbar_menu-item'>
							<Link to={`/books/categories/${category.id}`} className="navbar_menu-link">
								<i className={`navbar_menu-icon -${category.class}`}></i>
								<div className="navbar_menu-label">{category.name}</div>
							</Link>
						</li>) 
					})
				}

				<li className="navbar_menu-item">
					<Link to='/insert-new-book' className="navbar_menu-link">
						<i className="navbar_menu-icon -insert"></i>
						<div className="navbar_menu-label">Add new book</div>
					</Link>
				</li>
			</ul>

		</div>
	);
}

export default Navbar;