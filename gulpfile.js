var gulp = require('gulp'),
    sass = require('gulp-sass'),                     /*.pipe(sass())*/
    notify = require('gulp-notify'),                 /*.pipe(notify('Done! scc apdates'))*/
    less = require('gulp-less'),                    /*.pipe(less())*/
    debug = require('gulp-debug'),              /*.pipe(sourcemaps.init())*/
    sourcemaps = require('gulp-sourcemaps'),/*.pipe(debug({title:'Come On!'}))*/
    concat = require('gulp-concat'),             /*.pipe(concat(outputFilename))*/
    cleanCSS = require('gulp-clean-css'),      /*.pipe(gulpif(argv.prod, cleanCSS()))*/
    gulpIf = require('gulp-if'),
    argv = require('yargs').argv,                /*.pipe(gulpif(argv.prod, cleanCSS()))*/
    browser_sync = require('browser-sync'),        /*.pipe(browser-sync())*/
    clean = require('gulp-clean'),               /*.pipe(browser-sync())*/
    rename = require('gulp-rename'),         /* .pipe(rename('newFileName.js'))*/
    uglify = require('gulp-uglify'),             /* .pipe(rename('newFileName.js'))*/
    cache = require('gulp-cache'),
    cssnano = require('gulp-cssnano'),
    uglifyjs = require('gulp-uglifyjs'),
    pngquant = require('imagemin-pngquant'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),        /*.pipe(csscomb())*/
    shorthand = require('gulp-shorthand'),      /*.pipe(shorthand())*/
    shrthnd = require('shrthnd'),
    postcss = require('gulp-postcss'),
    important = require('postcss-important-shorthand'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    mutipipe = require('multipipe'),
    stream_combiner2 = require('stream-combiner2').obj,
    newer = require('gulp-newer'), //.pipe(newer(imgDest))
    sylus = require('gulp-stylus');
    typescriptFormatter = require('gulp-typescript-formatter');
    // ts_ = require('gulp-')

/*https://learn.javascript.ru/screencast/gulp#gulp-basics*/

// const  isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV =='development';

var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(ts(tsProject()))
        .js.pipe(gulp.dest("dist"));
});


gulp.task('watch', function() {
    gulp.watch('**/*.ts',gulp.series('default'));
});