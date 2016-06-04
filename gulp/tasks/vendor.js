var gulp = require('gulp');
var notify = require("gulp-notify");

gulp.task('vendor', function() {
  return gulp.src([
          'node_modules/nano-widget/nano_widget.min.es5.js'
        ])
        .pipe(notify('Getting vendor files...'))
        .pipe(gulp.dest('dist/vendor'));
});
