const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.get('/', function (req, res) {
    res.send({ message: 'hello', tech: 'express' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log(`Server running at: https://localhost:${PORT}`);
});