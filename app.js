const express = require('express');
const dotenv = require('dotenv');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

dotenv.config();

const app = express();


app.use(morgan('tiny'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, function () {
    debug(`Server running at: https://localhost:${chalk.green(PORT)}`);
});
