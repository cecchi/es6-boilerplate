var BrowserSync    = require('browser-sync');
var BroccoliFilter = require('broccoli-filter');

function BrowserSyncUpdateFilter(inputTree, options) {
    if (!(this instanceof BrowserSyncUpdateFilter)) {
        return new BrowserSyncUpdateFilter(inputTree, options);
    }

    this.options   = options || {};
    this.inputTree = inputTree;
    this.syncer    = BrowserSync.create();
    this.updates   = 0;

    this.syncer.init(options);
}

BrowserSyncUpdateFilter.prototype = Object.create(BroccoliFilter.prototype);
BrowserSyncUpdateFilter.prototype.constructor = BrowserSyncUpdateFilter;
BrowserSyncUpdateFilter.prototype.extensions = ['js', 'scss'];
BrowserSyncUpdateFilter.prototype.targetExtension = null;

BrowserSyncUpdateFilter.prototype.write = function processString(readTree, destDir) {
    this.updates++;

    if(this.updates > 1) {
        this.syncer.reload();
    }

    return BroccoliFilter.prototype.write.apply(this, Array.prototype.slice.call(arguments));
};

BrowserSyncUpdateFilter.prototype.processString = function processString(content, relativePath) {
    return content;
};

module.exports = BrowserSyncUpdateFilter;