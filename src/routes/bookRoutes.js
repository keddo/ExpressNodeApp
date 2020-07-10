const express = require('express');
const bookRouter = express.Router();
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:bookRoutes');

function router(nav) {
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
                const book = await db.collection('books').findOne({ _id: new ObjectID(id) });
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