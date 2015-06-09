// Broccoli Filters
var merge = require('broccoli-merge-trees'),
    sync  = require('./builders/plugins/broccoli-browser-sync');

// Trees
var configs = require('./builders/configs');
var scripts = require('./builders/scripts');
var styles  = require('./builders/styles');
var views   = require('./builders/views');

var everything = merge([configs, scripts, styles, views]);

// Hot-reloading
// Disabled for now. More likely to be enabled in a high-level task runner like Grunt or Gulp.
/*
var syncConfig = require('./configs/browsersync.js');
var everything = sync(everything, syncConfig);
*/

module.exports = everything;