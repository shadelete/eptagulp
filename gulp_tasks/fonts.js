var gulp = require('gulp');
var cnf = require('../package.json').config;

gulp.task('fonts', function () {
  gulp.src(cnf.dev.fonts)  
    .pipe(gulp.dest(cnf.dist.fonts));
});
 
gulp.task('fonts:watch', function () {
  gulp.watch([cnf.dev.fonts], ['fonts']);
});