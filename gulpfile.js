const gulp = require('gulp');
const moment = require('moment');
const jquery = require('jquery');
const lodash = require('lodash');
const numeral = require('numeral');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');

//SASS + AUTOPREFIXER
gulp.task('sass', function() {
    gulp.src('./src/sass/**/*.scss').pipe(sass()).pipe(autoprefixer(['last 15 version', '> 1%', 'ie 8', 'ie 7'], { cascade: true })).pipe(gulp.dest('./src/css'));
});

//CLEAN
gulp.task('clean', function() {
    return del.sync('./src/dist');
});

//ESLINT
gulp.task('lint', function() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

//CONCAT
gulp.task('concat', function() {
    gulp.src(['./src/scripts/jquery.js', './src/scripts/moment.js', './src/scripts/lodash.js', './src/scripts/numeral.js'])
        .pipe(concat('all-files.js'))
        .pipe(gulp.dest('./src/scripts/'));
});

//UGLIFY
gulp.task('scripts', function() {
    return gulp.src([
            './node_modules/moment/min/moment.min.js',
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/lodash/lodash.min.js',
            './node_modules/numeral/min/numeral.min.js'
        ])
        .pipe(concat('libs.min.js')).pipe(uglify().pipe(gulp.dest('./src/libs')));
});

//LIVERELOAD
gulp.task('livereload', function() {
    livereload.listen();
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});