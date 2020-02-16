import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import update from 'immutability-helper';
import Notiflix from "notiflix-react";
import "notiflix-react/dist/notiflix-react-1.4.0.css";

import Breadcrumbs from '../breadcrumbs/';
import Comments from '../comments/';
import api from '../../api'
import 'moment-timezone';
import './book.css';

class Book extends React.Component {
	constructor(props) {
		super(props);
		this.state = api.booksAPI.get(this.props.match.params.id);
		this.deleteBook	= this.deleteBook.bind(this);
	}

	componentDidMount() {
		Notiflix.Confirm.Init({
			width:'320px',
			borderRadius:'4px',
			useGoogleFont:true,
			fontFamily:'Poppins',
			titleColor:'#d5483d',
			messageColor:'#646c9a',
			okButtonBackground:'#d5483d',
			okButtonColor:'#f9f9fc',
		})
	}

	deleteBook(event) {
		event.preventDefault();

		/*Notiflix.Confirm.Show(
			'Delete book',
			'Are you sure to delete this book?',
			'Yes',
			'No',

			function(){
				
			},
		);*/
  

		const { book } = this.state;
		let deleted = 1;
		
		const newState = update(this.state, {
			deleted: {$set: deleted},
		});
		this.setState(newState);
		api.booksAPI.save(newState)
	}


	render() {
		const book = this.state

		return (
		<div className="container book">
			<div className="headings">
				<Breadcrumbs />
				<Link to='/' className="headings_back">Back</Link>
			</div>

			<div className="portlet">
				<div className="portlet_content">
					

					<div className="book_content">
						<div className="book_title">{book.title} - {book.deleted}</div>

						<div className="book_buttons">
							{book.deleted ?
								''
								:
								<div onClick={this.deleteBook} className="button -sm -red -mr_5 -icon -delete">Delete book</div>
							}
							
							<Link to={`/book/${book.id}/edit`} className="button -sm -basic -icon -edit">Edit book</Link>
						</div>
					</div>
				</div>
			</div>


			</div>
		)
	}
}


export default Book;
