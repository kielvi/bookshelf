import React from 'react';
import Moment from 'react-moment';
import { Redirect, Link } from "react-router-dom";
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
  
  		let self = this;
  		let deleted = (this.state.deleted==0 ? 1 : 0);

		Notiflix.Confirm.Show(
			'Delete book',
			'Are you sure to delete this book?',
			'Yes',
			'No',

			function() {
				const newState = update(self.state, {
					deleted: {$set: deleted}
				});
				
				self.setState(newState);
				api.booksAPI.save(self.state)
			},
		);
	}


	render() {
		const book = this.state;
		const totalComments = (book.comments ? book.comments.length : '');
		const { redirect } = this.state;

		return (
			<div className="container book">
				<div className="headings">
					<Breadcrumbs />
					<Link to='/' className="headings_back">Back</Link>
				</div>

				<div className="portlet">
					<div className="portlet_content">
						<div className="book_photo" style={{backgroundImage: "url("+book.photo+")"}}> </div>

						<div className="book_content">
							<div className="book_title">{book.title}</div>

							<div className="book_buttons">
								<div onClick={this.deleteBook} className="button -sm -red -mr_5 -icon -delete">{!book.deleted ? 'Delete book' : 'Restore book'}</div>
								
								
								<Link to={`/book/${book.id}/edit`} className="button -sm -basic -icon -edit">Edit book</Link>
							</div>
						</div>


						<div className="book_separator"></div>

						{book.author ? 
							<div className="book_label">
								<i className="book_label-icon -author"></i>
								<div className="book_label-content">
									<div className="book_label-title">Author</div>
									<div className="book_label-text">{book.author}</div>
								</div>
							</div>
							:
							false
						}

						{book.isbn ? 
							<div className="book_label">
								<i className="book_label-icon -isbn"></i>
								<div className="book_label-content">
									<div className="book_label-title">ISBN</div>
									<div className="book_label-text">{book.isbn}</div>
								</div>
							</div>
							:
							false
						}

						{book.timestamp ? 
							<div className="book_label">
								<i className="book_label-icon -author"></i>
								<div className="book_label-content">
									<div className="book_label-title">Create date</div>
									<div className="book_label-text"><Moment fromNow>{book.timestamp}</Moment></div>
								</div>
							</div>
							:
							false
						}

						<div className="book_label">
							<i className="book_label-icon -status"></i>
							<div className="book_label-content">
								<div className="book_label-title">Status</div>
								<div className="book_label-text">{!book.deleted ? "Active" : "Deleted"}</div>
							</div>
						</div>

						<div className="book_label">
							<i className="book_label-icon -comments"></i>
							<div className="book_label-content">
								<div className="book_label-title">Comments</div>
								<div className="book_label-text">{totalComments >0 ? totalComments+" comment(s)" : "No comments yet" }</div>
							</div>
						</div>
					</div>
				</div>

				<Comments book={book} />
			</div>
		)
	}
}


export default Book;
