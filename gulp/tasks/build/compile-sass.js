var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');

/**
 * @name _compileSass
 * @method
 * @description
 * Compiles and processes Sass modules and packages them to distribution
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _compileSass() {
    return gulp.src([config.paths.src.sass])
        .pipe(sass().on('error', sass.logError))
        .pipe(rename(config.filenames.build.css))
        .pipe(gulp.dest(config.paths.dist.css));
}

/**
 * Gulp task responsible for compiling sass to distribution
 * @module compile-sass
 */
module.exports = gulp.task('compile-sass', _compileSass);
