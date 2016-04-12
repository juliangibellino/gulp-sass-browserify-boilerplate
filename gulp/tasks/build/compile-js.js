var argv = require('yargs').argv,
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

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
    var isProd = argv.prod;

    return browserify({
        entries: [config.paths.src.app],
        paths: ['./node_modules', config.paths.src.path + 'js']
    })
        .bundle()
        .pipe(source(config.filenames.build.js))
        .pipe(buffer())
        .pipe(gulpif(isProd, sourcemaps.init({loadMaps: true})))
        .pipe(gulpif(isProd, uglify()))
        .pipe(gulpif(isProd, sourcemaps.write('./')))
        .pipe(gulp.dest(config.paths.dist.js));
}

/**
 * Gulp task responsible for compiling js to distribution
 * @param {string} --prod Indicator for if the build is for production. By default it will run as a dev build
 * @module compile-js
 */
module.exports = gulp.task('compile-js', ['lint'], _compileJS);
