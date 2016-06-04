var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/js/html files
gulp.task('watch', ['build'], function() {

    browserSync.init({
      server : {
        baseDir: './dist',
      },
      host: 'localhost',
      port: 3000,
      notify: false,
      browser: 'google chrome'
    });

    gulp.watch('src/scss/**', ['build']);
    gulp.watch('src/js/**', ['build']);
    gulp.watch('dist/*').on('change', browserSync.reload);
});
