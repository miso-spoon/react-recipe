const Recipe = require('../models/Recipe');
var fs = require('fs');

module.exports = {
	findAll: function(req, res) {
		Recipe.find(req.query)
			.then(recipes => res.json(recipes))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Recipe.findById(req.params.id)
			.then(recipe => res.json(recipe))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		Recipe.create(req.body)
			.then(newRecipe => res.json(newRecipe))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Recipe.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(recipe => res.json(recipe))
			.catch(err => res.status(422).json(err));
	},
	// upload: function(req, res) {
	// 	Recipe.findOneAndUpdate({ _id: req.params.id }, { imgUrl: req.files.file.data.toString('base64')})
	// 		.then(recipe => res.json(recipe))
	// 		.catch(err => res.status(422).json(err));
	// },
	remove: function(req, res) {
		Recipe.findById({ _id: req.params.id })
			.then(recipe => recipe.remove())
			.then(allrecipes => res.json(allrecipes))
			.catch(err => res.status(422).json(err));
	}
};