import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import Notiflix from "notiflix-react";
import "notiflix-react/dist/notiflix-react-1.4.0.css";
import update from 'immutability-helper';
import booksAPI from '../../api'
import api from '../../api';
import { Link } from 'react-router-dom';
import './commentsItem.css';

class Comment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			...props.data,
			editing: false
		}

		this.handleInputChange	= this.handleInputChange.bind(this);
		this.handleActionEdit	= this.handleActionEdit.bind(this);
		this.handleEditing	= this.handleEditing.bind(this);
		this.handleDelete	= this.handleDelete.bind(this);
	}

	handleActionEdit(event) {
		this.setState({
			...this.props.data,
			editing: true
		})
	}

	handleInputChange(event) {
		let target = event.target;
		let value = target.value;
		let name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleEditing(event) {
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
			'Comment successfully edited',
			'Okay',

			function() {
				const newState = update(self.state, {
					editing	: {$set: false},
				});
				self.props.book.saveComment(newState)
				self.setState(newState);
			}
		);
	}

	handleDelete(event) {
		event.preventDefault();
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
				const newState = update(self.state, {
					deleted	: {$set: 1},
					editing	: {$set: false},
				});
				self.props.book.saveComment(newState)
				self.setState(newState);
			}
		);
	}

	render() {
		const { editing } = this.state;
		const { data } = this.props;
		
		return (
			<div className="comment">
				<i className="comment_icon"></i>
				<div className="comment_content">
					<div className="comment_name">{data.author}</div>
					<div className="comment_date"><Moment fromNow>{data.timestamp}</Moment></div>
					<div className="comment_new">new</div>
					<div className="comment_menu">
						<div className="comment_menu-burguer"></div>
						<div className="comment_menu-content">
							<div className="comment_menu-link" onClick={this.handleActionEdit}>
								<div className="comment_menu-icon -edit"></div>
								Edit
							</div>
							<div className="comment_menu-link" onClick={this.handleDelete}>
								<div className="comment_menu-icon -delete"></div>
								Delete
							</div>
						</div>
					</div>
					<div className="comment_text">
						{!editing ?
							data.body
							:
							<form className="form" onSubmit={this.handleEditing}>
								<div className="form_group -w100">
									<textarea name="body" value={this.state.body} onChange={this.handleInputChange} className="form_input -textarea" required></textarea>
									<span className="form_validation">Error or just validation</span>
								</div>
								<div className="form_group -w100">
									<button className="button -submit -mr_20">Save</button>
								</div>
							</form>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Comment;

/*
			<div className="comment">
				<i className="comment_icon"></i>
				<div className="comment_content">
					<div className="comment_name">{Date.now()+" | "+data.author}</div>
					<div className="comment_date"><Moment fromNow>{data.timestamp}</Moment></div>
					<div className="comment_new">new</div>
					<div className="comment_menu">
						<div className="comment_menu-burguer"></div>
						<div className="comment_menu-content">
							<div className="comment_menu-link" onClick={this.handleActionEdit}>
								<div className="comment_menu-icon -edit"></div>
								Edit
							</div>
							<div className="comment_menu-link" onClick={this.handleDelete}>
								<div className="comment_menu-icon -delete"></div>
								Delete
							</div>
						</div>
					</div>
					<div className="comment_text">
						{!editing ?
							data.body
							:
							<form className="form" onSubmit={this.handleEditing}>
								<div className="form_group -w100">
									<textarea name="body" value={this.state.body} onChange={this.handleInputChange} className="form_input -textarea" required></textarea>
									<span className="form_validation">Error or just validation</span>
								</div>
								<div className="form_group -w100">
									<button className="button -submit -mr_20">Save</button>
								</div>
							</form>
						}
					</div>
				</div>
			</div>
 */