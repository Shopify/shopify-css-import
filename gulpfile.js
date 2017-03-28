// https://github.com/unlight/gulp-cssimport
var gulp = require('gulp');
var cssimport = require("gulp-cssimport");

var globalConfig = {
  src: 'css' // your dev stylesheet directory. No trailing slash
};

// Process CSS
gulp.task('styles', function(){
  return gulp.src(globalConfig.src + '/theme.scss.liquid')
    .pipe(cssimport())
    .pipe(gulp.dest('./assets/theme.scss.liquid'));
})

// Watch files
gulp.task('watch', function () {
  gulp.watch(globalConfig.src + '/**/*.*', ['styles']);
});

// Default task
gulp.task('default', ['watch']);
