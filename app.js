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
const route = express.Router();

route.route('/').get(function (req, res) {
    // eslint-disable-next-line no-undef
    res.render('index', { list: ['a', 'b'], title: 'My App' });
});
route.route('/books').get(function (req, res) {
    // eslint-disable-next-line no-undef
    res.render('book_list_view', { list: ['a', 'b'], title: 'My App' });
});

app.use('/api', route);
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    debug(`Server running at: http://localhost:${chalk.green(PORT)}`);
});


