# gulp-jsss
Compile jsss to CSS

## Usage
```js
var gulp = require('gulp');
var concat = require('gulp-concat');
var jsss = require('gulp-jsss');

gulp.task('jsss', function() {
  return gulp.src('jsss/**/*.js')
  .pipe(jsss())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('dist/css'));
});
```

