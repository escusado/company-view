'use strict';

var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var notify = require("gulp-notify");

gulp.task('clean-output', function (done) {
  return gulp.src(['dist/**'])
    .pipe(notify('Cleaning output...'))
    .pipe(vinylPaths(del).on('error', function() {}));
});

gulp.task('clean', ['clean-output']);
