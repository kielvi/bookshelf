import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import CategoryItem from '../categoryItem/'
import api from '../../api';
import './category.css'


class Category extends React.Component {
	constructor(props) {
		super(props);
		const { category } = this.props;

		this.state = {
			order: null,
			books: api.booksAPI.byCategory(category.id)
		};

		this.handleChange		= this.handleChange.bind(this);
	}

	componentDidMount() {
		const { books } = this.state;
		const orderBooks = books.sort((a,b) => a.title.localeCompare(b.title));

		this.setState({
			books: orderBooks
		})
	}

	handleChange(event) {
		const { books } = this.state;
		let booksNewOrder = books;

		if(event.value=="Az") {
			let booksNewOrder = books.sort((a,b) => a.title.localeCompare(b.title))
		}
		if(event.value=="Za") {
			let booksNewOrder = books.sort((a,b) => b.title.localeCompare(a.title))
		}
		if(event.value=="Date") {
			let booksNewOrder = books.sort((a,b) => b.timestamp - a.timestamp)
		}

		this.setState({
			order: event,
			books: booksNewOrder
		})
	}
	render() {
		const { order } = this.state;
		const { category } = this.props;
		const { books } = this.state;
		let total = books.length;

		return (
			<div className="home container">
				{total ? 
					<div className="category">
						<Link to={`/books/category/${category.id}`} className="category_title">{category.name}</Link>

						<div className="category_total">
							{books.length ? books.length+` book`+(books.length>1 ? 's' : '') : ''} 
						</div>

						<div className="category_sort">
							<Select
								value={order}
								onChange={this.handleChange}
								options={api.orderOptions}
								placeholder={'Order by'}
								theme={(theme) => ({
									...theme,
									colors: {
										...theme.colors,
										text: '#FFFFFF',
										text: '#FFFFFF',
										primary25: '#f9f9fc',
										primary: '#007a63',
										primary50: '#007a63',

									},
								})}
							/>
						</div>

						<div className="category_items">
							{
								books
									.filter(item => item.deleted==0)
									.map((book, i) => {     
									return (<CategoryItem key={i} item={book} />) 
								})
							}
						</div>
						<div className="category_separator"></div>
					</div>
				 : 
					<div className="alert -nofounds"><strong>No book's</strong> found yet.</div>
				}
			</div>
		);
	}
}


export default Category;