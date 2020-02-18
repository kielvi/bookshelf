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
			id 			: '',
			body 		: '',
			author 		: 'Me',
		};

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

				self.props.book.saveComment(self.state)
				const newState = update(self.state, {
					id 		: {$set: ''},
					body 		: {$set: ''},
					author 		: {$set: 'Me'}
				});
				self.setState(newState);
				/*self.props.book.saveComment(self.state)

				const newState = update(self.state, {
					commented	: {$set: true},
				});
				self.setState(newState);*/
			}
		);
	}

	render() {
		const { comments } = this.props.book;

		return (
			<div className="portlet -w100">
				<div className="portlet_head">
					Comments - {Date.now()}
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
						
							{comments.length>0 ?
								comments
									.sort((a,b) => b.timestamp - a.timestamp)
									.map((item, key) => {
									return (
										<Comment key={key} book={this.props.book} data={item} />
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
				/*<div className="portlet_head">
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
				</div>*/

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