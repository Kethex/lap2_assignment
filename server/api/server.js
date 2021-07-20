const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const booksRoutes = require('./routes/entries');
server.use('/routes/entries', booksRoutes);

server.get('/', (req, res) => res.send('Welcome to your journalling de-stress session'));

module.exports = server;
