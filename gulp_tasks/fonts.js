var gulp = require('gulp');
var cnf = require('../package.json').config;

gulp.task('fonts', function () {
  gulp.src(cnf.dev.fonts)  
    .pipe(gulp.dest(cnf.prod.fonts));
});
 
gulp.task('fonts:watch', function () {
  gulp.watch([cnf.dev.fonts], ['fonts']);
});