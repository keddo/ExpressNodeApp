const express = require('express');
const bookRouter = express.Router();

function router(nav) {
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

    bookRouter.route('/').get((req, res) => {
        // eslint-disable-next-line no-undef
        res.render('index',
            {
                nav,
                title: 'Bookstore'
            });
    });
    bookRouter.route('/books').get((req, res) => {
        // eslint-disable-next-line no-undef
        res.render('book_list',
            {
                nav,
                title: 'Bookstore',
                books
            });
    });
    bookRouter.route("/books/:id").get((req, res) => {
        const { id } = req.params;
        // eslint-disable-next-line no-undef
        res.render('single_book',
            {
                nav,
                title: 'Bookstore',
                book: books[id],
                id
            });
    });

    return bookRouter;
}

module.exports = router;