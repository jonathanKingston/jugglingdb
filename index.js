var fs = require('fs');
var path = require('path');

require('./lib/adapters/memory'); //For browserify

exports.Schema = require('./lib/schema').Schema;
exports.AbstractClass = require('./lib/abstract-class').AbstractClass;
exports.Validatable = require('./lib/validatable').Validatable;

exports.init = function (rw) {
    if (global.railway) {
        railway.orm = exports;
    } else {
        rw.orm = {Schema: exports.Schema, AbstractClass: exports.AbstractClass};
    }
    require('./lib/railway')(rw);
};

try {
    if (process.versions.node < '0.6') {
        exports.version = JSON.parse(fs.readFileSync(__dirname + '/package.json')).version;
    } else {
        exports.version = require('../package').version;
    }
} catch (e) {}

