const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const routes = require('./routes');

const PORT = process.env.PORT || 5000;

require('./models');

app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('client/build'));
app.post('/upload', (req, res, next) => {
	let uploadFile = req.files.file
	const fileName = req.files.file.name
	uploadFile.mv(
	  `${__dirname}/client/public/${fileName}`,
	  function (err) {
		if (err) {
		  return res.status(500).send(err)
		}
		res.json({
		  file: `./client/public/${req.files.file.name}`,
		})
	  },
	)
})

app.use(routes);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});