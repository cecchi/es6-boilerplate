var funnel = require('broccoli-funnel');

// Trees
var configs = funnel('configs', {
    'srcDir'  : '/',
    'destDir' : '/configs'
});

module.exports = configs;