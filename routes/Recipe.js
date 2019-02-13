const router = require('express').Router();
const recipeController = require('../controllers/recipeController');

router
    .route('/')
    .get(recipeController.findAll)
    .post(recipeController.create);

router
    .route('/:id')
    .get(recipeController.findById)
    .put(recipeController.update)
    // .post(recipeController.upload)
    .delete(recipeController.remove);

module.exports = router;