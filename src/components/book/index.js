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

		this.state = {
			...api.booksAPI.get(this.props.match.params.id)
		}

		this.deleteBook				= this.deleteBook.bind(this);
		this.handleCategoryChange	= this.handleCategoryChange.bind(this);
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

	handleCategoryChange(value) {
		const newState = update(this.state, {
			category: {$set: value}
		});

		api.booksAPI.save(newState)
		this.setState(newState);
		Notiflix.Notify.Success('Category changed successfully');
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
				console.log(newState)
				api.booksAPI.save(newState)
				self.setState(newState);

			},
		);
	}


	render() {
		let limit = 1200;
		const book = api.booksAPI.get(this.state.id);
		const allCategories = api.categories.asArray.splice(1);
		const totalComments = (book.comments ? book.comments.length : 0);

		const breadcrumbs = [
			{
				title: book.category_name,
				link: '/books/categories/'+book.category
			},
			{
				title: book.title
			},
		]

		return (
			<div className="container book">
				<div className="headings">
					<Breadcrumbs {...breadcrumbs} />
					<Link to='/' className="headings_back">Back</Link>
				</div>

				<div className="portlet">
					<div className="portlet_content">
						<div className="book_photo" style={{backgroundImage: "url("+book.photo+")"}}> </div>

						<div className="book_content">
							<div className="book_title">{book.title+" | "+Date.now()}</div>

							<div className="book_buttons">
								<div onClick={this.deleteBook} className="button -sm -red -mr_5 -icon -delete">{!book.deleted ? 'Delete book' : 'Restore book'}</div>
								<Link to={`/book/${book.id}/edit`} className="button -sm -basic -icon -edit">Edit book</Link>
							</div>

							{book.description.length > limit ?
								(
									<div className="book_description">
										{`${book.description.substring(0, limit)}...`}
									</div>
								) :
									<div className="book_description">
										{book.description}
									</div>
							}


							<div className="book_info">
								<div className="book_info-item">
									<div className="book_info-title">Creation date</div>
									<div className="book_info-label -blue"><Moment format="D MMM YYYY, h:mm:ss a">{book.timestamp}</Moment></div>
								</div>
								<div className="book_info-item">
									<div className="book_info-title">Category</div>
									<Link to={`/books/categories/${book.category}`} className={`book_info-label -${book.category_class}`}>{book.category_name}</Link>
									<div className="book_menu">
										<div className="book_menu-burguer"></div>
										<div className="book_menu-content">
											{
												allCategories
													.sort((a,b) => a.name.localeCompare(b.name))
													.map((category, i) => {
													return (
														<div className="book_menu-link" key={i} onClick={() => this.handleCategoryChange(`${category.id}`)}>
															<div className={`book_menu-icon -${category.class}`}></div>
															{category.name}
														</div>
													) 
												})
											}
										</div>
									</div>
								</div>
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
									<div className="book_label-title">Create in</div>
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
								<div className="book_label-text">{totalComments>0 ? totalComments+" comment(s)" : "No comments yet" }</div>
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