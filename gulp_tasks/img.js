const   gulp        = require('gulp'),
        cnf         = require('../package.json').config,
        notify      = require("gulp-notify"),
        plumber     = require('gulp-plumber'),
        imagemin    = require('gulp-imagemin'),
        runSequence = require('run-sequence');


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