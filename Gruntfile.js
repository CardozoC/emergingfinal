module.exports = function(grunt) {

  grunt.initConfig({
      sass: {
          options: {
              sourceMap: true
          },
          dist: {
              files: {
                  'dist/css/style.css': 'src/sass/style.scss'
              }
          }
      },
      uglify: {
        my_target: {
          files: {
            'dist/js/output.min.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/jquery.countdown/dist/jquery.countdown.js']
          }
        }
      },
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass'],
          options: {
            livereload: true,
          },
        },
      },
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['sass','uglify','watch']);

};