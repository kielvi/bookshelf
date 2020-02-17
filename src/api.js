class Category {
	constructor (category){
		return Object.assign(this, category);
	}

	get booksCount() {
		return booksAPI.byCategory(this.id).length;
	}
}

class Book {
	constructor (book){
		if(!book.category) book.category = 0;
		return Object.assign(this, book);
	}

	get category_name() {
		return categories[this.category].name;
	}
	get category_class() {
		return categories[this.category].class;
	}

	get comments() {
		return booksAPI.comments[this.id] || [];
	}
	set comments(data) {
		let comments = booksAPI.comments;
		comments[this.id] = data;
		booksAPI.comments = comments;

		return comments;
	}

	saveComment(data) {
		let comments = this.comments.filter((item)=> item.id != data.id)
		let saved_comment = this.comments.filter((item)=> item.id == data.id).reduce((c, e) => e || c, false);

		data.timestamp = (saved_comment) ? saved_comment.timestamp : Date.now();
		data.id = (saved_comment) ? saved_comment.id : comments.length+1;
		data.parentId = this.id;

		comments.push(data);
		this.comments = comments;

		return data;
	}

	save() {
		booksAPI.save(this);
	}
}

const categories = {
	0: new Category({
			"name"			: "Without category",
			"class"			: "without",
			"id"			: 0
	}),
	1:  new Category({
			"name"			: "Reading",
			"class"			: "reading",
			"id"			: 1
	}),
	2:  new Category({
			"name"			: "Want to read",
			"class"			: "wantToRead",
			"id"			: 2
	}),
	3:  new Category({
			"name"			: "Read",
			"class"			: "read",
			"id"			: 3
	}),
	

	get asArray() { 
		return Object
				.keys(this)
				.map((el) => (el != 'asArray') ? categories[el] : null)
				.filter((el)=>el);
	}
}


const booksAPI = {
	_books: [
		/*{
			"id"			: 1,
			"timestamp"		: 1581634369874,
			"category"		: 1,
			"title"			: "React.js. Bystryy start",
			"description"	: "",
			"author"		: "Stoyan Stefanov",
			"isbn"			: "9785496030038",
			"photo"			: "https://covers.openlibrary.org/b/id/8749306.jpg",
			"deleted"		: 0,

		},
		{
			"id"			: 2,
			"timestamp"		: 1581640781160,
			"category"		: 1,
			"title"			: "Fullstack React: The Complete Guide to ReactJS and Friends",
			"description"	: "",
			"author"		: "Accomazzo Anthony",
			"isbn"			: "9781785289644",
			"photo"			: "https://covers.openlibrary.org/w/id/8508281.jpg",
			"deleted"		: 0,

		},
		{
			"id"			: 3,
			"timestamp"		: 1581634369874,
			"category"		: 1,
			"title"			: "ReactJS by Example - Building Modern Web Applications with React",
			"description"	: "This textbook for the first undergraduate linear algebra course presents a unified treatment of linear algebra and geometric algebra, while covering most of the usual linear algebra topics.Geometric algebra is an extension of linear algebra. It enhances the treatment of many linear algebra topics. And geometric algebra does much more.\r\nGeometric algebra and its extension to geometric calculus unify, simplify, and generalize vast areas of mathematics that involve geometric ideas. They provide a unified mathematical language for many areas of physics, computer science, and other fields.\r\n\r\nThe book can be used for self study by those comfortable with the theorem/proof style of a mathematics text. This is a fifth printing, corrected and slightly revised.",
			"author"		: "Vipul A M",
			"isbn"			: "9781785289644",
			"photo"			: "https://covers.openlibrary.org/b/id/8513006.jpg",
			"deleted"		: 0,

		},*/
	],

	set books(books){
		localStorage.setItem('books', JSON.stringify(books));
		return books
	},
	get books(){
		let books = JSON.parse( localStorage.getItem('books') || false );
		return (books || this._books).map((item) => new Book(item));
	},

	set comments(comment){
		localStorage.setItem('comment', JSON.stringify(comment));
		return comment
	},
	get comments(){
		let comment = JSON.parse( localStorage.getItem('comment') || false );
		return comment || {};
	},

	get commentsCount(){
		let comment = JSON.parse( localStorage.getItem('comment') || false );
		return comment.length;
	},

	byCategory: function(category){
		return this.books.filter((el) => el.category == category);
	},

	save: function(book) {
		let books = this.books.filter((item)=> item.id != book.id);
		let saved_book = this.books.filter((item)=> item.id == book.id).reduce((c, e) => e || c, false);

		book.timestamp = (saved_book) ? saved_book.timestamp : Date.now();
		book.id = (saved_book) ? saved_book.id : books.length+1;

		books.push(new Book(book));
		this.books = books;

		return new Book(book);
	},


	all: function() { return this.books },
	get: function(id) {
		const isBook = p => p.id == id;
		return this.books.find(isBook)
	}
}

const orderOptions = [
	{ value: 'Az', label: 'A-z | Alphabetical' },
	{ value: 'Za', label: 'Z-A | Alphabetical' },
	{ value: 'Date', label: 'Creation date' },
];

export default { categories, booksAPI, orderOptions };