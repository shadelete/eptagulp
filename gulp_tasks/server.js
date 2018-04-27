var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "prod/",
            index: "index.html",
        },
        notify: false,
		port: 3244,
        files: ['prod/**/*.*']
    });
});