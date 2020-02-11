

const booksAPI = {
	books: [
	{
		"id"			: 1,
		"category"		: 1,
		"timestamp"		: "",
		"title"			: "Linear and Geometric Algebra",
		"description"	: "This textbook for the first undergraduate linear algebra course presents a unified treatment of linear algebra and geometric algebra, while covering most of the usual linear algebra topics.\r\nGeometric algebra is an extension of linear algebra. It enhances the treatment of many linear algebra topics. And geometric algebra does much more.\r\nGeometric algebra and its extension to geometric calculus unify, simplify, and generalize vast areas of mathematics that involve geometric ideas. They provide a unified mathematical language for many areas of physics, computer science, and other fields.\r\n\r\nThe book can be used for self study by those comfortable with the theorem/proof style of a mathematics text. This is a fifth printing, corrected and slightly revised.",
		"author"		: "",
		"isbn"			: "1453854932",
		"photo"			: "https://covers.openlibrary.org/b/id/9261425-S.jpg",
		"deleted"		: 0,

	},

	],
	all: function() { return this.books },
	get: function(id) {
		const isBook = p => p.id === id
		return this.books.find(isBook)
	}
}

export default booksAPI;