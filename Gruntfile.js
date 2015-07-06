'use strict';

module.exports = function(grunt) {

    var configs = require('load-grunt-configs')(grunt, {
        config : {
            src: "grunt/*.js"
        }
    });

    grunt.initConfig(configs);
    require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

    /**
     * Default task to be used by developers. Kill any existing processes, compile JSX/SASS
     */
    grunt.registerTask('default', [
        //'shell:pkill',
        //'shell:redis',
        'webpack-dev-server:start',
    ]);
};
