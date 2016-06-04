var gulp = require('gulp');
var babel = require('gulp-babel');
var notify = require('gulp-notify');

gulp.task('babel', function () {
  return gulp.src(['src/js/*.js','src/js/**/*.js'])
    .pipe(notify('Compile ES6...'))
    .pipe(babel({
      presets: ['babel-preset-es2015']
    }))
    .pipe(gulp.dest('dist/js/'));
});
