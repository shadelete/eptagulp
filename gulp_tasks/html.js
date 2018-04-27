var gulp = require('gulp');
var cnf = require('../package.json').config;
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var fileinclude = require('gulp-file-include');

gulp.task('html', function () {
  return gulp.src(cnf.dev.html)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
    .pipe(gulp.dest(cnf.dist.html));
});
 
gulp.task('html:watch', function () {
  gulp.watch(['dev/**/*.html'], ['html']);
});