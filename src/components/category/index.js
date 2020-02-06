import React from 'react';
import './category.css'

function Category() {
	return (
		<div className="category">
			<a href="" className="category_title">Category title</a>
			<div className="category_total">
				10 books
			</div>
			<div className="category_items">
				<div className="item">
					<a className="item_container">
						<div className="item_photo -no_photo"></div>
						<div className="item_title">Framing 101 : how to take back public discourse</div>
						<div className="item_category -read">Read</div>
						<div className="item_description">
							Know your values and frame the debate : the essential guide for progressives
						</div>
					</a>
				</div>
				<div className="item">
					<a className="item_container">
						<div className="item_photo"></div>
						<div className="item_title">Lorem ipsum</div>
						<div className="item_category -want">Want to read</div>
						<div className="item_description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						</div>
					</a>
				</div>
				<div className="item">
					<a className="item_container">
						<div className="item_photo"></div>
						<div className="item_title">Don't think of an elephant!</div>
						<div className="item_category -reading">Currently Reading</div>
						<div className="item_description">
							Know your values and frame the debate : the essential guide for progressives
						</div>
					</a>
				</div>
				<div className="item">
					<a className="item_container">
						<div className="item_photo"></div>
						<div className="item_title">Lorem ipsum</div>
						<div className="item_category">Read</div>
						<div className="item_description">
							Know your values and frame the debate : the essential guide for progressives
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Category;
