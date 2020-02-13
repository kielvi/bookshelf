import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import 'moment-timezone';
import api from '../../api'
import Breadcrumbs from '../breadcrumbs/';
import Comments from '../comments/';
import './book.css';


const Book = (props) => {
	const book = api.booksAPI.get(
		parseInt(props.match.params.id, 10)
	)

	const itemActive = book.title;
	const category = book.category;
	const dateToFormat = '2020-02-10T20:02-0500';
            

	return (
		<div className="container book">
			<div className="headings">
				<Breadcrumbs  {...{ itemActive }} />
				<Link to='/' className="headings_back">Back</Link>
			</div>

			<div className="portlet">
				<div className="portlet_content">
					<div className="book_photo" style={{backgroundImage: "url("+book.photo+")"}}> </div>

					<div className="book_content">
						<div className="book_title">{book.title}</div>

						<div className="book_buttons">
							<Link to='' className="button -sm -red -mr_5 -icon -delete">Delete book</Link>
							<Link to={`/book/${book.id}/edit`} className="button -sm -green -icon -edit">Edit book</Link>
						</div>

						<div className="book_description">{book.description}</div>


						<div className="book_info">
							<div className="book_info-item">
								<div className="book_info-title">Creation date</div>
								<div className="book_info-label -blue"><Moment format="D MMM YYYY, h:mm:ss a">{dateToFormat}</Moment></div>
							</div>
							<div className="book_info-item">
								<div className="book_info-title">Category</div>
								<Link to={`/books/${category}`} className={`book_info-label -${book.category_name}`}>{book.category_name}</Link>
							</div>
						</div>
					</div>

					<div className="book_separator"></div>

					<div className="book_label">
						<i className="book_label-icon -author"></i>
						<div className="book_label-content">
							<div className="book_label-title">Author</div>
							<div className="book_label-text">{book.author}</div>
						</div>
					</div>

					<div className="book_label">
						<i className="book_label-icon -isbn"></i>
						<div className="book_label-content">
							<div className="book_label-title">ISBN</div>
							<div className="book_label-text">{book.isbn}</div>
						</div>
					</div>

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
							<Link to="" className="book_label-link">678 comments</Link>
						</div>
					</div>
				</div>
			</div>

			<Comments book={book} />
		</div>
	)
}

export default Book;
