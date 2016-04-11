var browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream');

/**
 * @name _compileJS
 * @method
 * @description
 * Compiles the JS modules, bundles and packages them to distribution
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _compileJS() {
    return browserify({
        entries: [config.paths.src.app],
        paths: ['./node_modules', config.paths.src.path + 'js']
    })
        .bundle()
        .pipe(source(config.filenames.build.js))
        .pipe(buffer())
        .pipe(gulp.dest(config.paths.dist.js));
}

/**
 * Gulp task responsible for compiling js to distribution
 * @module compile-js
 */
module.exports = gulp.task('compile-js', ['lint'], _compileJS);
