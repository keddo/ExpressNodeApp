const express = require('express');
const debug = require('debug')('app:adminRoutes');
const { MongoClient } = require('mongodb');
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
function router() {
    const adminRouter = express.Router();
    adminRouter.route('/admin')
        .get((req, res) => {
            const url = 'mongodb://localhost:27017';
            const dbName = 'bookstore';
            (async function mongo() {
                let client;
                try {
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName);
                    const response = await db.collection('books').insertMany(books);
                    res.json(response);
                } catch (err) {
                    debug(err.stack)
                }
                client.close();
            }());
        });
    return adminRouter;
}

module.exports = router;