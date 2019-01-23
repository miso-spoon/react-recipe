import axios from 'axios';

export default {
	// Gets all recipes
	getRecipes: function() {
		return axios.get('/api/recipe');
	},
	// Gets the recipe with the given id
	getRecipe: function(id) {
		return axios.get('/api/recipe/' + id);
	},
	// Deletes the recipe with the given id
	deleteRecipe: function(id) {
		return axios.delete('/api/recipe/' + id);
	},
	// Saves a recipe to the database
	saveRecipe: function(recipeData) {
		return axios.post('/api/recipe', recipeData);
	}
};