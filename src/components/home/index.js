import React from 'react';
import './home.css';
import Category from '../category/';


function Home() {
	return (
		<div className="container home">
			<Category />
			<Category />
			<Category />
			<Category />
		</div>
	);
}

export default Home;
