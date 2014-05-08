module.exports = function(grunt) {

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
        return gulp.src('css/**/*.*')
          .pipe(cssimport())
          .pipe(gulp.dest('assets/'));
      }
    },

    watch: {
      gulp: {
        files: 'css/**/*.*',
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

  grunt.loadNpmTasks ('grunt-exec');
  grunt.loadNpmTasks ('grunt-concurrent');
  grunt.loadNpmTasks ('grunt-contrib-watch');
  grunt.loadNpmTasks ('grunt-gulp');

  grunt.registerTask ('default', ['concurrent:watch']);

};