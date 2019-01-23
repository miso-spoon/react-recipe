// config/index.js
const dbuser = 'Miso';
const dbpassword = 'osimpassword1';

const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds163764.mlab.com:63764/recipe`;

module.exports = MONGODB_URI;