'use strict';

// Gulp related 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');

var browserSync = require('browser-sync').create();
 
var paths = {
    html:    ['./src/**/*.html'],
    scripts: ['./src/js/**/*.js'],
    styles:  ['./src/scss/**/*.scss'],
    images:  ['./src/images/**/*'],
    fonts:   ['./src/fonts/**/*'],
    vendor:  ['./src/vendor/**/*']
};

gulp.task('build:clean', function () {
    return del(['build']);
});

gulp.task('build:html', function () {
    return gulp.src(paths.html)
        .pipe(gulp.dest('./build'));
});

gulp.task('build:scripts', function () {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('build:styles', function () {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('build:images', function () {
    return gulp.src(paths.images)
        .pipe(gulp.dest('./build/images'));
});

gulp.task('build:fonts', function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('build:vendor', function () {
    return gulp.src(paths.vendor)
        .pipe(gulp.dest('./build/vendor'));
});

// The default build
gulp.task('build', [
    'build:html', 'build:scripts', 'build:styles', 'build:images', 'build:fonts', 'build:vendor'
]);

// Rerun the task when a file changes 
gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['build:clean']);
    gulp.watch(paths.scripts, ['build:scripts']);
    gulp.watch(paths.styles, ['build:styles']);
    gulp.watch(paths.images, ['build:images']);
    gulp.watch(paths.vendor, ['build:vendor']);
});


gulp.task('serve', ['watch'], function () {
    browserSync.init({
        port: 4000,
        server: {
            baseDir: "./build",
            index: "index.html"
        },
        ui: false
    });
});

// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['serve', 'build']);
