var fs = require('fs');
var path = require('path');

require('./lib/adapters/memory'); //For browserify

exports.Schema = require('./lib/schema').Schema;
exports.AbstractClass = require('./lib/abstract-class').AbstractClass;
exports.Validatable = require('./lib/validatable').Validatable;

try {
    if (process.versions.node < '0.6') {
        exports.version = JSON.parse(fs.readFileSync(__dirname + '/package.json')).version;
    } else {
        exports.version = require('../package').version;
    }
} catch (e) {}

