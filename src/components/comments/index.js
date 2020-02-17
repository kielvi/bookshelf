import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import update from 'immutability-helper';
import Notiflix from "notiflix-react";
import "notiflix-react/dist/notiflix-react-1.4.0.css";
import api from '../../api';
import { Link } from 'react-router-dom';
import Comment from '../commentsItem/';
import './comments.css';

class Comments extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			body 		: '',
			author 		: 'Me',
		};

//booksAPI.books[""0""].__proto__.saveComment
		this.handleInputChange	= this.handleInputChange.bind(this);
		this.handleSubmit		= this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		let target = event.target;
		let value = target.value;
		let name = target.name;

		this.setState({
			[name]: value
		});
	}

	

	handleSubmit(event) {
		event.preventDefault();
		if (!event.target.checkValidity()) {
			return;
		}

		let self = this;

		Notiflix.Report.Init({
			messageFontSize:"15px",
			titleFontSize:"22px",
			success: {svgColor:"#3cd08c",}
		});
		Notiflix.Report.Success(
			'Success!',
			'Comment successfully registered',
			'Okay',

			function() {
				api.booksAPI.get(self.props.book.id).saveComment(self.state)
				const newState = update(self.state, {
					commented: {$set: true},
				});
				self.setState(newState);
			}
		);
		//this.props.book.saveComment(this.state)
	}

	render() {
		const { comments } = api.booksAPI.get(this.props.book.id);
		const commentsCount = api.booksAPI.get(this.props.book.id).comments.length;

		return (
			<div className="portlet -w100">
				<div className="portlet_head">
					Comments
				</div>

				<div className="portlet_content">
					<form className="form" onSubmit={this.handleSubmit}>
						<div className="form_group -w100">
							<textarea name="body" value={this.state.body} onChange={this.handleInputChange} placeholder="Write your comment" className="form_input -textarea" required></textarea>
							<span className="form_validation">Error or just validation</span>
						</div>
						<div className="form_group -w100">
							<button className="button -submit -mr_20">Add comment</button>
						</div>
						<div className="form_separator"></div>
					</form>


					<div className="comments_items">
						{commentsCount ?
							comments
								.sort((a,b) => b.timestamp - a.timestamp)
								.map((item, key) => {
									return (
										<Comment key={key} data={item} />
									)
								})
							:
							<div className="alert">No comments found</div>
						}
					</div>
				</div>
			</div>
		)
	}
}
/*
				<div className="portlet_content">

					<form className="form" onSubmit={this.handleSubmit}>
						<div className="form_group -w100">
							<textarea name="body" value={this.state.body} onChange={this.handleInputChange} placeholder="Write your comment" className="form_input -textarea" required></textarea>
							<span className="form_validation">Error or just validation</span>
						</div>
						<div className="form_group -w100">
							<button className="button -submit -mr_20">Add comment</button>
						</div>
						<div className="form_separator"></div>
					</form>

					<div className="comments_items">
						{hasComments ?
							comments
								.sort((a,b) => b.timestamp - a.timestamp)
								.map((item, key) => {
									return (
										<Comment key={key} book={book} data={item} />
									)
								})
							:
							<div className="alert">No comments found</div>
						}
					</div>
				</div>
 */
export default Comments;

/*
						{hasComments ?
								data.book.comments
									.sort((a,b) => b.timestamp - a.timestamp)
									.map((item, key) => {     
									return (
										<Comment key={key} book={data.book} data={item} />
									) 
								})
							:
							<div>Nao ha book</div>
						}

 */