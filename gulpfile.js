// https://github.com/unlight/gulp-cssimport
var gulp = require('gulp');
var cssimport = require("gulp-cssimport");

// Process CSS
gulp.task('styles', function(){
  return gulp.src('css/**/*.*')
    .pipe(cssimport())
    .pipe(gulp.dest('assets/'));
})

// Watch files
gulp.task('watch', function () {
  gulp.watch('css/**/*.*', ['styles']);
});

// Default task
gulp.task('default', ['watch']);