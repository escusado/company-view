var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var PORT = process.env.PORT || 3000;

// Static Server + watching scss/js/html files
gulp.task('watch', ['build'], function() {

    browserSync.init({
      server : {
        baseDir: './dist',
      },
      host: 'localhost',
      port: PORT,
      notify: false,
      browser: 'google chrome'
    });

    console.log('Running on', PORT)

    gulp.watch('src/scss/**', ['build']);
    gulp.watch('src/js/**', ['build']);
    gulp.watch('dist/*').on('change', browserSync.reload);
});
