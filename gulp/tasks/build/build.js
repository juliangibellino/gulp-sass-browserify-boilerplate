'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

/**
 * @name _build
 * @method
 * @description
 * Cleans distribution and builds new package
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _build(cb){
    return runSequence(
        ['clean'],
        ['compile-sass', 'compile-js','compile-view'],
        cb
    );
}

/**
 * Gulp task responsible for building the full distribution package
 * @module build
 */
module.exports = gulp.task('build', _build);
