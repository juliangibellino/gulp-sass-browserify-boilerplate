var jshint = require('gulp-jshint');
var gulp   = require('gulp');

/**
 * @name _lint
 * @method
 * @description
 * Lint JS for errors
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _lint() {
    return gulp.src([config.paths.src.js, '!./src/js/vendor/*/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
}

/**
 * Gulp task responsible linting JS
 * @module lint
 */
module.exports = gulp.task('lint', _lint);
