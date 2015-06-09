var compile = require('broccoli-sass');

module.exports = compile(['app/sass'], 'main.scss', 'css/main.css');