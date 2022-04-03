const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	author: String,
	body: String,
	post: Number
});

module.exports = mongoose.model('comment', commentSchema);
