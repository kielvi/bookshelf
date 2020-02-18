import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from '../navbar/';
import Home from '../home/';
import Categories from '../categories/';
import Form from '../form/';
import Book from '../book/';


const Main = () => (
	<main>
		<Navbar />

		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/categories/" component={Form} />
			<Route path="/books/categories/:id" component={Categories} />
			<Route path="/book/:id/edit" component={Form} />
			<Route path='/book/:id' component={Book}/>
			<Route path="/insert-new-book/" component={Form} />
		</Switch>
	</main>
	);

export default Main;
