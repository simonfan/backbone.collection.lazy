var path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            default: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    keepalive: true,
                    livereload: true,
                    open: 'http://localhost:8000/dev/index.html',
                }
            },
        },

        bower: {
            target: {
                rjsConfig: 'dev/main.js',
            }
        },

        watch: {
            live: {
                files: ['backbone.collection.lazy.js','dev/tests/**','dev/demo/**'],
                options: {
                    livereload: true
                }
            },

            bower: {
                files: ['bower.json'],
                tasks: ['bower']
            }
        }
    });

    /**
     * Task loading
     */
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-bower-requirejs');


    /**
    Auxiliary task that starts a server in a child process.
    */
    grunt.registerTask('child-process-server', function() {
        // start the server on a child process
        grunt.util.spawn({
            cmd: 'grunt',
            args: ['connect']
        });
    });

    // full live
    grunt.registerTask('live',['child-process-server','watch:live']);

    grunt.registerTask('default',['bower']);
};
