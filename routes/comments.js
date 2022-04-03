const router = require('express').Router();
const Comment = require('../models/comment');
const Joi = require('joi');

router.get('/', async (req, res) => {
	res.json(await Comment.find());
});

router.post('/', (req, res) => {
	if (req.body._id) {
		res.status(400).send('Id should not be in body');
		return;
	}
	const schema = {
		author: Joi.string().required(),
		body: Joi.string().required(),
		post: Joi.number().required()
	};

	const { error } = Joi.validate(req.body, schema);

	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}

	const comment = new Comment({ ...req.body });

	comment.save();

	res.json(req.body);
});

module.exports = router;
