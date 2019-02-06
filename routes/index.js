const router = require('express').Router();
const recipeRoutes = require('./Recipe');
const path = require('path');

router.use('/api/recipe', recipeRoutes);
// router.use('/api/files', fileRoutes);

router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;