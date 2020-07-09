const express = require('express');
const bookRouter = express.Router();

const books = [
    {
        title: "War and Peace",
        genre: "Historical Fiction",
        author: 'Lev Nikolayevich Tolstoy',
        image_format: 'png',
        read: false
    },
    {
        title: "les Miserables",
        genre: "Historical Fiction",
        author: 'Victor Hugo',
        image_format: 'png',
        read: false
    },
    {
        title: "A Journey into the center of the Earth.",
        genre: "Science Fiction",
        author: 'Jules Verne',
        image_format: 'png',
        read: false
    },
    {
        title: "The Dark World",
        genre: "Fantasy",
        author: 'Henry Kuttner',
        image_format: 'png',
        read: false
    },
    {
        title: "The Time Machine",
        genre: "Science Fiction",
        author: 'H. G. Wells',
        image_format: 'png',
        read: false
    },
    {
        title: "The Wind in the Willows",
        genre: "Fantasy",
        author: 'Kenneth Grahame',
        image_format: 'jpg',
        read: false
    },
    {
        title: "Life on the Mississippi",
        genre: "History",
        author: 'Kenneth Grahame',
        image_format: 'png',
        read: false
    },
    {
        title: "Life on the Mississippi",
        genre: "History",
        author: 'Kenneth Grahame',
        image_format: 'png',
        read: false
    }
];

bookRouter.route('/').get(function (req, res) {
    // eslint-disable-next-line no-undef
    res.render('index',
        {
            nav: [{ link: '/api', title: "Home" },
            { link: '/api/books', title: "Books" },
            { link: '/api/authors', title: "Authors" },
            { link: '/api/category', title: "Category" }],
            title: 'Bookstore'
        });
});
bookRouter.route('/books').get(function (req, res) {
    // eslint-disable-next-line no-undef
    res.render('book_list_view',
        {
            nav: [{ link: '/api', title: "Home" },
            { link: '/api/books', title: "Books" },
            { link: '/api/authors', title: "Authors" },
            { link: '/api/categories', title: "Category" }],
            title: 'Bookstore',
            books
        });
});

module.exports = bookRouter;