const express = require('express');
const bookRouter = express.Router();
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:bookRoutes');

function router(nav) {
    // const books = [
    //     {
    //         title: "War and Peace",
    //         genre: "Historical Fiction",
    //         author: 'Lev Nikolayevich Tolstoy',
    //         image_format: 'png',
    //         read: false
    //     },
    //     {
    //         title: "les Miserables",
    //         genre: "Historical Fiction",
    //         author: 'Victor Hugo',
    //         image_format: 'png',
    //         read: false
    //     },
    //     {
    //         title: "A Journey into the center of the Earth.",
    //         genre: "Science Fiction",
    //         author: 'Jules Verne',
    //         image_format: 'png',
    //         read: false
    //     },
    //     {
    //         title: "The Dark World",
    //         genre: "Fantasy",
    //         author: 'Henry Kuttner',
    //         image_format: 'png',
    //         read: false
    //     },
    //     {
    //         title: "The Time Machine",
    //         genre: "Science Fiction",
    //         author: 'H. G. Wells',
    //         image_format: 'png',
    //         read: false
    //     },
    //     {
    //         title: "The Wind in the Willows",
    //         genre: "Fantasy",
    //         author: 'Kenneth Grahame',
    //         image_format: 'jpg',
    //         read: false
    //     },
    //     {
    //         title: "Life on the Mississippi",
    //         genre: "History",
    //         author: 'Kenneth Grahame',
    //         image_format: 'png',
    //         read: false
    //     },
    //     {
    //         title: "Life on the Mississippi",
    //         genre: "History",
    //         author: 'Kenneth Grahame',
    //         image_format: 'png',
    //         read: false
    //     }
    // ];
    bookRouter.route('/').get((req, res) => {

        // eslint-disable-next-line no-undef
        res.render('index',
            {
                nav,
                title: 'Bookstore'
            });
    });

    bookRouter.route('/books').get((req, res) => {
        (async function mongo() {
            let client;
            try {
                const url = 'mongodb://localhost:27017';
                const dbName = 'bookstore';
                client = await MongoClient.connect(url, { useUnifiedTopology: true });
                const db = client.db(dbName);
                const books = await db.collection('books').find().toArray();
                res.render('book_list',
                    {
                        nav,
                        title: 'Bookstore',
                        books
                    });
            } catch (err) {
                debug(err.stack);
            }
            client.close();
        }())
        // eslint-disable-next-line no-undef
    });
    bookRouter.route("/books/:id").get((req, res) => {

        (async function mongo() {
            let client;
            try {
                const { id } = req.params;
                const url = 'mongodb://localhost:27017';
                const dbName = 'bookstore';

                client = await MongoClient.connect(url);
                const db = client.db(dbName);
                const book = await db.collection('books').find({ id });
                // eslint-disable-next-line no-undef
                res.render('single_book',
                    {
                        nav,
                        title: 'Bookstore',
                        book
                    });
            } catch (err) {
                debug(err.stack)
            }
            client.close();
        }())

    });

    return bookRouter;
}

module.exports = router;