var fs = require('fs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var jsss = require('./index');

gulp.task('jsss', function() {
  return gulp.src('test/style.js')
  .pipe(jsss())
  .pipe(rename('style.css'))
  .pipe(gulp.dest('test/'));
});

gulp.task('test', ['jsss'], function() {
  var fixture = fs.readFileSync('test/fixture.css', {encoding: 'utf8'});
  var css = fs.readFileSync('test/style.css', {encoding: 'utf8'});
  if (css !== fixture) throw Error(';(');
  return true;
});
