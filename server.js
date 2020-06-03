const express = require('express');
const app = express();
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const bingoRouter = require('./resources/bingo/bingo.router');
const morgan = require('morgan');

require('dotenv').config({path: __dirname + '/.env'});
app.disabled('x-powered-by');
app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api/bingo',bingoRouter);

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

module.exports.start = async () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log('listening in %s', process.env.PORT);
        });
    } catch (e) {
      console.error(e);
    }
};