const express = require('express');
const app = express();
const routes = require('./routes');
var multer = require('multer');
var fs = require('fs');
mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PORT = process.env.PORT || 5000;
const path = require('path');
require('./models');
const crypto = require('crypto');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.resolve(__dirname, './client/public/uploads'))
	},
	filename: function (req, file, callback) {
		crypto.pseudoRandomBytes(16, function(err, raw) {
			if (err) return callback(err);
		  
			callback(null, raw.toString('hex') + path.extname(file.originalname));
		  });
	}
});
app.use(express.static('client/build'));
var upload = multer({ storage: storage });

app.post('/api/uploads', upload.single('file'), (req, res) => {
	console.log(req.file);
	if (!req.file) {
	  console.log("No file received");
	  return res.send({
		success: false
	  });
  
	} else {
	  console.log('file received');
	  return res.send({
		success: true,
		path: req.file.filename
	  })
	}
});


app.use(routes);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});