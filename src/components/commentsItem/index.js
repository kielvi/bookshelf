import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import booksAPI from '../../api'
import { Link } from 'react-router-dom';
import './commentsItem.css';


const Comment = (props) => {
	const comment = props.data;

	return (
		<div className="comment">
			<i className="comment_icon"></i>
			<div className="comment_content">
				<div className="comment_name">{comment.author}</div>
				<div className="comment_date"><Moment fromNow>{comment.timestamp}</Moment></div>
				<div className="comment_new">new</div>
				<div className="comment_menu">
					<div className="comment_menu-burguer"></div>
					<div className="comment_menu-content">
						<Link to="/" className="comment_menu-link">
							<div className="comment_menu-icon -edit"></div>
							Edit
						</Link>
						<Link to="/" className="comment_menu-link">
							<div className="comment_menu-icon -delete"></div>
							Delete
						</Link>
					</div>
				</div>
				<div className="comment_text">{comment.body}</div>
			</div>
		</div>
	)
	
}
export default Comment;
