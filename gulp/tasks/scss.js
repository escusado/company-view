var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");

gulp.task('scss', function() {
    gulp.src('src/scss/main.scss')
        .pipe(notify('Compile SCSS...'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
});
