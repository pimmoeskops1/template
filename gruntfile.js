module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        my_target: {
          files: {
            'build/app.min.js': ['build/*.js']
          }
        }
      },
      cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'build/output.min.css': ['CSS/*.css']
          }
        }
      },
      babel: {
        options: {
          sourceMap: true,
          presets: ['env']
        },
        dist: {
          files: {
            'build/uglify.js': ['JS/*.js']
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['cssmin', 'babel', 'uglify']);
  
  };