var funnel = require('broccoli-funnel');

// Trees
var views = funnel('app/views', {
    'srcDir'  : '/',
    'destDir' : '/',
    'files'   : ['index.html']
});

module.exports = views