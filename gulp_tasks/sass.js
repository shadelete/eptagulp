const gulp          = require('gulp'),
      cnf           = require('../package.json').config,
      notify        = require("gulp-notify"),
      plumber       = require('gulp-plumber'),
      sourcemaps    = require('gulp-sourcemaps'),
      sass          = require('gulp-sass'),
      autoprefixer  = require('gulp-autoprefixer'),
      cssnano       = require('gulp-cssnano'),
      rename        = require("gulp-rename");

gulp.task('sass', function () {
  return gulp.src(cnf.dev.sass)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 15 versions', 'ie 10'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename({
      dirname: "",
      basename: "main",
      prefix: "",
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cnf.prod.css));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./dev/sass/**/*.*', ['sass']);
});