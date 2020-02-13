import React from 'react';
import { Link } from 'react-router-dom';
import CategoryItem from '../categoryItem/'
import api from '../../api';
import './category.css'

const Category = (props) => {
	let category = props.category;
	let books = api.booksAPI.byCategory(category.id);

	return (
		<div className="category">
			<a href="" className="category_title">{category.name}</a>
			<div className="category_total">
				{books.length} books
			</div>
			<div className="category_items">
				{
					books.map((book, i) => {     
						return (<CategoryItem key={i} book={book} />) 
					})
				}
			</div>
		</div>
	)
}

export default Category;
