import React from 'react';
import Select from 'react-select';
import CategoryItem from '../categoryItem/'
import api from '../../api';
import './categories.css'


class Categories extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			order: null,
			category_title: api.categories[this.props.match.params.id].name,
			books: api.booksAPI.byCategory(this.props.match.params.id)
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

	componentDidUpdate(prevProps) {
		if(this.props.match.params.id === prevProps.match.params.id) return;

		this.setState({
			order: null,
			category_title: api.categories[this.props.match.params.id].name,
			books: api.booksAPI.byCategory(this.props.match.params.id)
		});

	}

	handleChange(event) {
		const { books } = this.state;
		const booksNewOrder = books;


		if(event.value==="Az") {
			const booksNewOrder = books.sort((a,b) => a.title.localeCompare(b.title))
		}
		if(event.value==="Za") {
			const booksNewOrder = books.sort((a,b) => b.title.localeCompare(a.title))
		}
		if(event.value==="Date") {
			const booksNewOrder = books.sort((a,b) => b.timestamp - a.timestamp)
		}

		this.setState({
			order: event,
			books: booksNewOrder
		})
	}


	render() {
		const { order } = this.state;
		const { books } = this.state;
		const { category_title } = this.state;
		let total = books.length;

		return (
			<div className="container">
				{total ? 
					<div className="category">
						<div className="category_title">{category_title}</div>

						<div className="category_total">
							{total ? total+` book`+(total>1 ? 's' : '') : ''} 
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
									.map((book, i) => {     
									return (<CategoryItem key={i} item={book} />) 
								})
							}
						</div>
					</div>
				
				 : 
					<div className="alert -nofounds">No book's found in <strong>{category_title}.</strong></div>
				}
			</div>
		)
		
	}
}


export default Categories;