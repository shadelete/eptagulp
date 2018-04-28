const gulp        = require('gulp'),
      cnf         = require('../package.json').config,
      notify      = require("gulp-notify"),
      plumber     = require('gulp-plumber'),
      sourcemaps  = require('gulp-sourcemaps'),
      babel       = require('gulp-babel'),
      include     = require("gulp-include"),
      uglify      = require('gulp-uglify'),
      rename      = require("gulp-rename");

gulp.task('js', function () {
  gulp.src(cnf.dev.js)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel())
    .pipe(include({
        extensions: "js",
        hardFail: true
      }))
    .pipe(uglify())
    .pipe(rename({
      dirname: "",
      basename: "main",
      prefix: "",
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cnf.prod.js));
});
 
gulp.task('js:watch', function () {
  gulp.watch([cnf.dev.js, 'dev/js/components/**/*.js'], ['js']);
});