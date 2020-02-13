import React from 'react';
import { Link } from 'react-router-dom';
import './categoryItem.css'

const CategoryItem = (type) => {
	

	return (
		<div className="item">
			<Link to='/book/1' className="item_container">
				<div className="item_photo -no_photo"></div>
				<div className="item_title">Framing 101 : how to take back public discourse</div>
				<div className="item_category -read">Read</div>
				<div className="item_description">
					Know your values and frame the debate : the essential guide for progressives
				</div>
			</Link>
		</div>
	)
}

export default CategoryItem;
