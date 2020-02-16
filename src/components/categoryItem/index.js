import React from 'react';
import { Link } from 'react-router-dom';
import './categoryItem.css'

const CategoryItem = (props) => {
	console.log(props.item)
	let book = props.item;
	let limit = 100;
	let photo = props.item.photo;
	let description = props.item.description;

	return (
		<div className="item">
			<Link to={`/book/${book.id}`} className="item_container">
				<div className={`item_photo `+(!photo ? "-no_photo":'')} style={ photo ? { backgroundImage:`url(${photo})`, backgroundSize:`cover` } : '' }></div>
				<div className="item_content">
					<div className="item_title">{book.title} - {book.deleted}</div>
					<div className="item_author">{book.author}</div>
					<div className={`item_category -${book.category_class}`}>{book.category_name}</div>

					{description.length > limit ?
						(
							<div className="item_description">
								{`${description.substring(0, limit)}...`}
							</div>
						) :
							false
					}
				</div>
			</Link>
		</div>
	)
}

export default CategoryItem;
