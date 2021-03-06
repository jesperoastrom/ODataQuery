var path = require('path');
var webpackConfig = require('./webpack.test.config');

module.exports.createCommonConfig = function(config) {
    return {
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            { pattern: '../**/specs/*.spec.*', watched: false }
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '../**/specs/*.spec.*': ['webpack']
        },

        webpack: webpackConfig,
        proxies: {
            '/client': '/base/client'
        },
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        },


        webpackServer: {
            noInfo: true // please don't spam the console when running in karma!
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'mocha'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //reporters: ["mocha", "coverage", "karma-remap-istanbul"],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'], // you can also use Chrome

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    };
}