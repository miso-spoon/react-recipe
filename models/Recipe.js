const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
	title: {
		type: String,
	},
	cookTime: {
		type: String,
    },
    difficulty: {
        type: String
    },
    imageUrl: {
        type: String
    },
    ingredientList: {
        type: []
    },
    instructions: {
        type: []
    },
    imgUrl: {
        type: String
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;