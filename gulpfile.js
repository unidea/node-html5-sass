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
const fileInclude = require('gulp-file-include');
const gutil = require('gulp-util');

// Commun paths (glob) for files and extensions.
const paths = {
  file: ['**/*.{html,xml,json}'],
  js: ['./js/**/*.js'],
  scss: ['./scss/**/*.scss']
};

// Blacklisted paths (glob) that will be included in some task.
const blacklist = {
  files: [
    '!./bower.json',
    '!./gulpfile.js',
    '!./LICENSE',
    '!./package.json',
    '!./README.md'
  ],
  folders: [
    '!./_preview{,/**}',
    '!./css{,/**}',
    '!./js{,/**}',
    '!./node_modules{,/**}',
    '!./scss{,/**}'
  ],
  bower: [
    '!./bower_components{,/**}'
  ],
  partials: [
    '!./partials{,/**}'
  ]
};

// Task for building a preview of the site, ready for deployment.
gulp.task('preview', function () {
  runSequence('preview:clean', ['process:file', 'process:js', 'process:scss']);
});

// Task for removing the deployment folder.
gulp.task('preview:clean', function () {
  return del('_preview');
});

// Process JS files and return the stream.
gulp.task('process:file', function () {

  // Path to files that must be copied to the _preview folder, including bower_components.
  let path = ['**/*']
    .concat(blacklist.files)
    .concat(blacklist.folders)
    .concat(blacklist.partials);

  return gulp.src(path)
    .pipe(fileInclude())
    .pipe(gulp.dest('./_preview'));
});

// Process JS files and return the stream.
gulp.task('process:js', function () {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./_preview/js'));
});

// Process SCSS files and return the stream.
gulp.task('process:scss', function () {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
    .pipe(gulp.dest('./_preview/css'))
    .pipe(browserSync.stream());
});

// Default task to launch Browser-Sync and watch for changes.
gulp.task('serve', ['process:file', 'process:js', 'process:scss'], function () {

  // Serve files from this folder
  browserSync.init({
    server: {
      baseDir: "./_preview",
      index: "index.html"
    }
  });

  // Path to files that must be watch for change, including partials
  let path = paths.file
    .concat(blacklist.files)
    .concat(blacklist.folders)
    .concat(blacklist.bower);

  gulp.watch(path, ['process:file']).on('change', browserSync.reload);
  gulp.watch(paths.js, ['process:js']).on('change', browserSync.reload);
  gulp.watch(paths.scss, ['process:scss']);
});

// Gult default task (called when you run `gulp` from cli)
gulp.task('default', () => {
  gutil.log("Please use gulp preview or gulp serve.");
});
