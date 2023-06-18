const express = require('express');
const cors = require('cors');
const logger = require('morgan')

const bookstoreRouter = require('./routes/bookstoreroutes');
const {connect} = require('./db/db')

const app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/',bookstoreRouter)
connect();

module.exports = app