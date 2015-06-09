// Broccoli Plugins
var broccoli = require('broccoli');
var funnel   = require('broccoli-funnel');
var merge    = require('broccoli-merge-trees');
var eslint   = require('broccoli-lint-eslint');
var babelify = require('broccoli-babel-transpiler');

// Build trees
var external = funnel('jspm_packages', {
    'srcDir'  : '/',
    'destDir' : '/jspm_packages'
});
var source   = funnel('app/js', {
    'srcDir'  : '/',
    'destDir' : '/js'
});

// Lint the source tree
source = eslint(source, {
    'options' : {
        'configFile' : 'configs/eslint.json'
    }
});

// Compile to ES5
// System.JS breaks source maps, so we can pre-compile ourselves.
// Disabled for now. Instead, we can wrap the main thread in an asychronous thread, see:
//    https://github.com/ModuleLoader/es6-module-loader/issues/293#issuecomment-71807109
/*
source = babelify(source, {
    'sourceMaps' : 'inline'
});
*/

module.exports = merge([source, external]);