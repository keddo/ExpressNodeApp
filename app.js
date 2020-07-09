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

// Navbar titles
const nav = [{ link: '/api', title: "Home" },
{ link: '/api/books', title: "Books" },
{ link: '/api/authors', title: "Authors" },
{ link: '/api/categories', title: "Category" }];

app.set('views', './src/views');
app.set('view engine', 'ejs');
const bookRouter = require('./src/routes/bookRoutes')(nav);
app.use('/api', bookRouter);
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    debug(`Server running at: http://localhost:${chalk.green(PORT)}`);
});


