var gulp = require('gulp');
var cnf = require('../package.json').config;
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');


gulp.task('img', function () {
  gulp.src(cnf.dev.img)
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest(cnf.prod.img));
});
 
gulp.task('img:watch', function () {
  gulp.watch(['dev/img/**/*.*'], ['img']);
});