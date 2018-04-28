const 	gulp 			= require('gulp'),
 		cnf 			= require('../package.json').config,
 		notify 			= require("gulp-notify"),
 		plumber 		= require('gulp-plumber'),
 		sourcemaps 		= require('gulp-sourcemaps'),
		fileinclude 	= require('gulp-file-include');

gulp.task('html', function () {
  return gulp.src(cnf.dev.html)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
    .pipe(gulp.dest(cnf.prod.html));
});
 
gulp.task('html:watch', function () {
  gulp.watch(['dev/**/*.html'], ['html']);
});