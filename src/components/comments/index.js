import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import api from '../../api';
import { Link } from 'react-router-dom';
import Comment from '../commentsItem/';
import './comments.css';

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id 			: null,
			parentId 	: '',
			timestamp	: '',
			body 		: '',
			author 		: 'Me',
			deleted		: false,
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

		this.props.book.saveComment(this.state)
	}

	render() {
		const data = this.props;

		return (
			<div className="portlet -w100">
				<div className="portlet_head">
					Comments
				</div>
				<div className="portlet_content">

					<form className="form" onSubmit={this.handleSubmit}>
						<div className="form_group -w100">
							<textarea name="body" value={this.state.body} onChange={this.handleInputChange} placeholder="Write your comment" className="form_input -textarea"></textarea>
							<span className="form_validation">Error or just validation</span>
						</div>
						<div className="form_group -w100">
							<button className="button -submit -mr_20">Add comment</button>
						</div>
						<div className="form_separator"></div>
					</form>

					<div className="comments_items">
						{
							data.book.comments
								.sort((a,b) => b.timestamp - a.timestamp)
								.map((item, key) => {     
								return (
									<Comment key={key} book={data.book} data={item} />
								) 
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Comments;
