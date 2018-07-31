const 	gulp 			= require('gulp'),
 		cnf 			= require('../package.json').config,
 		notify 			= require("gulp-notify"),
 		plumber 		= require('gulp-plumber'),
 		sourcemaps 		= require('gulp-sourcemaps'),
		fileinclude 	= require('gulp-file-include'),
		pug 			= require('gulp-pug');

gulp.task('pug', function () {
  return gulp.src('dev/index.pug')
  	.pipe(pug({
    	pretty: true
   		}))
    //.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    //.pipe(fileinclude({
    //    prefix: '@@',
    //    basepath: '@file'
    //  	}))

    .pipe(gulp.dest('prod'));
});
 
gulp.task('pug:watch', function () {
  gulp.watch(['dev/**/*.pug'], ['pug']);
});