var gulp = require('gulp');
var notify = require("gulp-notify");

gulp.task('views', function() {
  return gulp.src([
          'src/views/*.html',
          'src/views/**/*.html'
        ])
        .pipe(notify('Getting vendor files...'))
        .pipe(gulp.dest('dist/views/'));
});
