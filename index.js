var through = require('through2');
var gutil = require('gulp-util');
var jsss = require('jsss-compiler');
var PluginError = gutil.PluginError;

module.exports = function() {
  var stream  = through.obj(function(file, enc, callback) {
    if (file.isNull()) {
      // Do nothing if no contents
    }

    if (file.isBuffer()) {
      var str = file.contents.toString('utf8');
      var data = jsss.parse(str);
      file.contents = new Buffer(data);
    }

    if (file.isStream()) {
      file.contents = file.contens.pipe(jsss.parse(file.contents));
    }
    this.push(file);
    return callback();
  });

  return stream;
};
