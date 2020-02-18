import React from 'react';
import { Redirect, useHistory } from "react-router-dom";
import update from 'immutability-helper';
import Notiflix from "notiflix-react";
import "notiflix-react/dist/notiflix-react-1.4.0.css";

import Breadcrumbs from '../breadcrumbs/'
import api from '../../api';


class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			category 	: null,
			photo 		: '',
			timestamp	: '',
			isbn 		: '',
			title 		: '',
			author 		: '',
			description : '',
			deleted		: 0,
			photoLoading: '',
			redirect	: false
		};

		if(props.match.params.id)
			this.state = api.booksAPI.get(props.match.params.id)

		this.onSearchChange		= this.onSearchChange.bind(this);
		this.setSearchISBN		= this.setSearchISBN.bind(this);
		this.handleInputChange	= this.handleInputChange.bind(this);
		this.handleSubmit		= this.handleSubmit.bind(this);
	}

	setSearchISBN(result, isbn) {
		if(result.error) { 
			this.photoLoading = "";
			this.setState({
				'title'			: "",
				'author'		: "",
				'description'	: "",
				'photo'			: "",
				'photoLoading'	: ""
			});

			Notiflix.Report.Failure(
				'Book not found',
				'"This ISSBN book not found, insert a new ISBN number',
				'Close'
			);	
			Notiflix.Loading.Remove();
			return console.error(result.error);
		}

		const book 		 = result["ISBN:"+isbn].details;
		let title 		 = book.title;
		let author 		 = (book.authors ? book.authors[0].name : null);
		let description  = book.description;
		let photo 		 = "https://covers.openlibrary.org/b/id/"+book.covers[0]+".jpg";

		this.setState({
			'title'			: (title ? title : ''),
			'author'		: (author ? author : ''),
			'description'	: (description ? description : ''),
			'photo'			: (photo ? photo : ''),
			'photoLoading'	: false,
		});
		Notiflix.Loading.Remove();
	}

	onSearchChange(event) {
		const isbn = event.target.value;

		const library_base	 = 'https://openlibrary.org/api/books';
		const library_search = '?bibkeys=ISBN:';
		const library_type	 = '&jscmd=details&format=json';

		Notiflix.Loading.Pulse('Searching book ...');
		this.setState({
			'title'			: "Loading data",
			'author'		: "Loading data",
			'description'	: "Loading data",
			'photoLoading'	: " -loading"
		});

		fetch(`${library_base}${library_search}${isbn}${library_type}`)
			.then((response) => response.json())
			.then(function(response){
			 	if(Object.keys(response).length) return response;
			 	return {
			 		error: 'livro nao encontrado'
			 	} 
			})
			.then(response => this.setSearchISBN(response, isbn))
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	}

	handleInputChange(event) {
		let target = event.target;
		let value = target.value;
		let name = target.name;

		if(name=="category" && value==this.state.category) value="";

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		
		let self = this;

		Notiflix.Report.Init({
			messageFontSize:"15px",
			titleFontSize:"22px",
			success: {svgColor:"#3cd08c",}
		});
		Notiflix.Report.Success(
			'Success!',
			'Book successfully registered',
			'Okay',

			function() {
				const newState = update(self.state, {
					redirect: {$set: true},
				});
				self.setState(newState);
				api.booksAPI.save(newState);

				self.props.history.push('/');
			}
		);
	}

	render() {
		const { photo } = this.state;
		const { photoLoading } = this.state;

		return (
			<div className="container">
				<div className="headings">
					<Breadcrumbs />
					<a href="" className="headings_back">Back</a>

					<div className="headings_title">Insert new book</div>
				</div>


				<form className="form" onSubmit={this.handleSubmit}>
					<div className="portlet">
						<div className="portlet_content">

						
							<div className="form_group -w100">
								<label htmlFor="title" className="form_label">Category</label>

								<div className="categories">
									<label className="categories_item">
										<input name="category" value={this.state.category} onChange={this.handleInputChange} onClick={this.handleInputChange} checked={ this.state.category == 1 } type="radio" value="1" />
										<div className="categories_item-icon -reading"></div>
										<div className="categories_item-title">Reading</div>
									</label>
									<label className="categories_item">
										<input name="category" value={this.state.category} onChange={this.handleInputChange} onClick={this.handleInputChange} checked={ this.state.category == 2 } type="radio" value="2" />
										<div className="categories_item-icon -wantToRead"></div>
										<div className="categories_item-title">Want to read</div>
									</label>
									<label className="categories_item">
										<input name="category" value={this.state.category} onChange={this.handleInputChange} onClick={this.handleInputChange} checked={ this.state.category == 3 } type="radio" value="3" />
										<div className="categories_item-icon -read"></div>
										<div className="categories_item-title">Read</div>
									</label>

								</div>

								<span className="form_validation">Error or just validation</span>
							</div>

							<div className="form_column -w30">
								<div className={`form_photo `+this.state.photoLoading} style={ photo ? { backgroundImage:`url(${photo})`, backgroundSize:`cover` } : null }>
									<input name="photo" value={this.state.photo} onChange={this.handleInputChange} type="hidden" />

								</div>
							</div>
							<div className="form_column">
								<div className="form_group -one_row">
									<label htmlFor="title" className="form_label">ISBN</label>
									<input name="isbn" value={this.state.isbn} onChange={this.handleInputChange} onBlur={this.onSearchChange} type="text" placeholder="Write the ISBN number" className="form_input -w_auto" />
									<span className="form_validation">Error or just validation</span>
								</div>

								<div className="form_group">
									<label htmlFor="title" className="form_label">Title</label>
									<input name="title" value={this.state.title} onChange={this.handleInputChange} type="text" placeholder="Write the book title" className="form_input" />
									<span className="form_validation">Error or just validation</span>
								</div>

								<div className="form_group">
									<label htmlFor="author" className="form_label">Author</label>
									<input name="author" value={this.state.author} onChange={this.handleInputChange} type="text" placeholder="Write the author name" className="form_input" />
									<span className="form_validation">Error or just validation</span>
								</div>

								<div className="form_group -w100">
									<label htmlFor="description" className="form_label">Description</label>
									<textarea name="description" value={this.state.description} onChange={this.handleInputChange}  placeholder="Write the name description" className="form_input -textarea"></textarea>
									<span className="form_validation">Error or just validation</span>
								</div>
							</div>

						</div>
						<div className="portlet_footer">
							<button className="button -submit -mr_20">Submit</button>
							<button className="button -outline">Cancel</button>
						</div>
					</div>
				</form>

			</div>
			);
		}
	}


export default Form;
