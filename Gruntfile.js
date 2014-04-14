module.exports = function(grunt) {

    grunt.initConfig({
        jasmine_node : {
            all: ["tests/backend/controllers/"]
        },
        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                background: true
            }
        },
        watch: {
            karma: {
                tasks: ['karma:unit:run']
            },
            less: {
                files: "./frontend/dev/less/**/*.less",
                tasks: ["less"]
            }
        },
        less: {
            bootstrap: {
                options: {
                    paths:["frontend/dev/less/bootstrap/"],
                    cleancss: true,
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: 'bootstrap.css.map',
                    sourceMapFilename: 'frontend/public/css/bootstrap.css.map'
                },
                files: {
                    "frontend/public/css/bootstrap.css": "**/bootstrap.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.registerTask('devmode', ['karma:unit', 'watch']);
};