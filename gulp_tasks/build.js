const 	gulp 			     = require('gulp'),
		    runSequence 	 = require('run-sequence'),
		    del 			     = require('del');


gulp.task('clean', function() {
	return del(['prod/'])
});

gulp.task('build',['clean'], function() {
  runSequence(
  	'sass',
  	'html',
    'js',
  	'fonts',
  	'img',
  	'libs'
   );
});