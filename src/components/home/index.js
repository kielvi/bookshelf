import React from 'react';
import './home.css';
import Category from '../category/';
import api from '../../api';

const Home = () => {

	return (
		<div>
			{
				api.categories
					.asArray
					.filter((item)=> item.booksCount)
					.map((category, i) => {
						return (<Category key={i} category={category} />) 
				})
			}
		</div>
	)
}

export default Home;
