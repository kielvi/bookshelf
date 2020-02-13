import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import booksAPI from '../../api'
import { Link } from 'react-router-dom';
import './comments.css';


const Comments = (props) => {
	/*const book = booksAPI.get(
		parseInt(props.match.params.id, 10)
	)*/
console.log(props.book.comments)

window.book = props.book;

	return (
		<div className="portlet -w100">
			<div className="portlet_head">
				Comments
			</div>
			<div className="portlet_content">
				<form className="form">
					<div className="form_group -w100">
						<textarea name="comment" id="comment" placeholder="Write yout comment" className="form_input -textarea"></textarea>
						<span className="form_validation">Error or just validation</span>
					</div>
					<div className="form_group -w100">
						<button className="button -submit -mr_20">Add comment</button>
					</div>
					<div className="form_separator"></div>
				</form>

				<div className="comments_items">
					{
						props.book.comments
							.sort((a,b) => b.timestamp - a.timestamp)
							.map((item, i) => {     
							return (
								<div className="comment" key={i}>
									<i className="comment_icon"></i>
									<div className="comment_content">
										<div className="comment_date">{ (new Date(item.timestamp)).toString() }</div>
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
										<div className="comment_text">{item.body}</div>
									</div>
								</div>
							) 
						})
					}


				</div>

			</div>
		</div>
	)
}

export default Comments;
