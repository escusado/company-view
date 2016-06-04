var gulp = require('gulp');
var notify = require("gulp-notify");

gulp.task('images', function() {
  return gulp.src([
          'src/img/*'
        ])
        .pipe(notify('Getting vendor files...'))
        .pipe(gulp.dest('dist/img/'));
});
