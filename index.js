const config = require('config');
const express = require('express');
const { default: helmet } = require('helmet');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const comments = require('./routes/comments');

mongoose
	.connect(config.get('db'))
	.then(() => console.log('Connected to: ' + config.get('db')))
	.catch((err) => console.log(err));

app.use(helmet());
app.use(express.json());
app.use('/api/comments', comments);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
