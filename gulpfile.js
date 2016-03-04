'use strict';

// Gulp related requirements
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

// Commun globs
const paths = {
  file: ['**/*.{html,xml,json,csv,yml}'],
  js: ['js/**/*.js', '!js/**/*.min.js'],
  scss: ['scss/**/*.scss']
};

const blacklist = [
  '!./bower.json',
  '!./gulpfile.js',
  '!./LICENSE',
  '!./node_modules{,/**}',
  '!./package.json',
  '!./README.md',
  '!./scss{,/**}'
];

// Task for building a copy of the site, ready for deployment.
gulp.task('build', function () {
  runSequence('build:clean', ['build:ftp']);
});

// Task for removing the deployment folder
gulp.task('build:clean', function () {
  return del('deployment_build');
});

// Task for copying the required files and folders for deployment.
// By default, gulp ignore files and folders starting with a dot.
gulp.task('build:ftp', function () {

  let path = ['**/*'].concat(blacklist);

  return gulp.src(path)
    .pipe(gulp.dest('deployment_build'));
});

// Process JS files and return the stream.
gulp.task('js', function () {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js'));
});

// Process SCSS files and return the stream.
gulp.task('scss', function () {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// Default task to launch Browser-Sync and watch JS files
gulp.task('serve', ['js', 'scss'], function () {

  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });

  gulp.watch(paths.scss, ['scss'])
  gulp.watch(paths.js, ['js']).on('change', browserSync.reload);
  gulp.watch(paths.file).on('change', browserSync.reload);
});

// Gult default task (called when you run `gulp` from cli)
gulp.task('default', ['serve']);
