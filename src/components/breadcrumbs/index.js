import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumbs.css';

const Breadcrumbs = (props) => {
	const _items = props;

	return (
		<ul className="breadcrumbs">
			<li className="breadcrumbs_item">
				<Link to='/' className="breadcrumbs_link-link">
					<i className="breadcrumbs_icon -home"></i>
				</Link>
			</li>

			{Object.keys(_items).map((item, i) => (
				<li className="breadcrumbs_item" key={i}>
					{_items[item].link ? 
						<Link to={_items[item].link} className="breadcrumbs_link-link">{_items[item].title}</Link>
						:
						_items[item].title
					}
					
				</li>
			))}

			
		</ul>
	);
}

export default Breadcrumbs;
/*<li className="breadcrumbs_item">
				<Link to='/' className="breadcrumbs_link-link">Books</Link>
			</li>
			<li className="breadcrumbs_item">
				
			</li>*/