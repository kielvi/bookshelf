import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumbs.css';

const Breadcrumbs = (props) => {
	const itemActive = props.itemActive;

	return (
		<ul className="breadcrumbs">
			<li className="breadcrumbs_item">
				<Link to='/' className="breadcrumbs_link-link">
					<i className="breadcrumbs_icon -home"></i>
				</Link>
			</li>
			<li className="breadcrumbs_item">
				<a href="javascript:void(0);" className="breadcrumbs_link">Books</a>
			</li>
			<li className="breadcrumbs_item">
				{itemActive}
			</li>
		</ul>
	);
}

export default Breadcrumbs;
