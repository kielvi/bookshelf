import React from 'react';
import './breadcrumbs.css';

function Breadcrumbs() {
	return (
		<ul className="breadcrumbs">
			<li className="breadcrumbs_item">
				<a href="javascript:void(0);" className="breadcrumbs_link"><i className="breadcrumbs_icon -home"></i></a>
			</li>
			<li className="breadcrumbs_item">
				<a href="javascript:void(0);" className="breadcrumbs_link">Books</a>
			</li>
			<li className="breadcrumbs_item">
				Insert new book
			</li>
		</ul>
	);
}

export default Breadcrumbs;
