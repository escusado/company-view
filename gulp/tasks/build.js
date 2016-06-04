var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (done) {
  console.log('\n\n>>>>>> BUILD <<<<<<<');
  runSequence(
    'clean',
    'vendor',
    'scss',
    'babel',
    'images',
    'views',
    done
  );
});
