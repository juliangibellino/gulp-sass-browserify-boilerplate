var argv = require('yargs').argv,
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
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
    var isProd = argv.prod,
        sassOptions = {
        outputStyle: isProd ? 'compressed' : 'expanded',
        sourceMap: isProd !== undefined
    };

    return gulp.src([config.paths.src.sass])
        .pipe(gulpif(isProd, sourcemaps.init()))
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(rename(config.filenames.build.css))
        .pipe(gulpif(isProd, sourcemaps.write('./')))
        .pipe(gulp.dest(config.paths.dist.css));
}

/**
 * Gulp task responsible for compiling sass to distribution
 * @param {string} --prod Indicator for if the build is for production. By default it will run as a dev build
 * @module compile-sass
 */
module.exports = gulp.task('compile-sass', _compileSass);
