var path = require('path');

global.config = {
    port: 3000,
    paths: {
        src: {
            path: './src/',
            sass: './src/scss/**/*.scss',
            js: './src/js/**/*.js',
            assets: './src/assets/**/*',
            view: './src/view/**/*.html',
            app: './src/js/index.js'
        },
        dist: {
            path: './dist/',
            css: './dist/css',
            js: './dist/js',
            assets: './dist/assets/'
        }
    },
    filenames: {
        build: {
            css: 'main.css',
            js: 'main.js'
        }
    }
};
