module.exports = function(grunt) {

  var globalConfig = {
    src: 'css' // your dev stylesheet directory. No trailing slash
  };

  var gulp = require('gulp');
  var cssimport = require("gulp-cssimport");

  grunt.initConfig({
    exec: {
      theme_watch: {
        command: 'bundle exec theme watch'
      }
    },

    gulp: {
      concat: function() {
        return gulp.src(globalConfig.src + '/**/[^_]*.*')
          .pipe(cssimport())
          .pipe(gulp.dest('assets/'));
      }
    },

    watch: {
      gulp: {
        files: globalConfig.src + '/**/*.*',
        tasks: ['gulp']
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      watch: {
        tasks: ['watch', 'exec']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask ('default', ['concurrent:watch']);

};