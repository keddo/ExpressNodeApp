const express = require('express');
const dotenv = require('dotenv');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

dotenv.config();

const app = express();

app.use(morgan('tiny'));

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');
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

app.use('/api', bookRouter);
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    debug(`Server running at: http://localhost:${chalk.green(PORT)}`);
});


