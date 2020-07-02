const express = require('express');
const dotenv = require('dotenv');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

dotenv.config();

const app = express();


app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.send({ message: 'hello', tech: 'express' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, function () {
    debug(`Server running at: https://localhost:${chalk.green(PORT)}`);
});
