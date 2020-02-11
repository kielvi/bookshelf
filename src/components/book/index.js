import React from 'react';
import booksAPI from '../../api'
import Breadcrumbs from '../breadcrumbs/';
import { Link } from 'react-router-dom';
import './book.css';


const Book = (props) => {
	const book = booksAPI.get(
		parseInt(props.match.params.number, 10)
	)
	const itemActive = book.title;
	if (!book) return <div className="container">Sorry, but the book was not found</div>
	return (
		<div className="container">
			<div className="headings">
				<Breadcrumbs  {...{ itemActive }} />
				<Link to='/' className="headings_back">Back</Link>

				<div className="headings_title">{book.title}</div>
			</div>

		</div>
	)
}

export default Book;
