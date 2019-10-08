const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = function (config) {
    config.set({
        basePath: './',
        frameworks: ['mocha', 'karma-typescript'],
        files: [
            './test/**/*.ts',
            './src/**/*.ts'
        ],
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },
        plugins: [
            'karma-chai',
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-typescript',
            'karma-typescript-es6-transform',
            'karma-sourcemap-loader'
        ],
        reporters: ['progress', 'karma-typescript'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        concurrency: 1,
        mime: {'text/x-typescript': ['ts', 'tsx']}
    })
};

