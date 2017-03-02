var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//server
gulp.task('start', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            port: 8080,
            open: true
        }));
});

//styles
gulp.task('style', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer({
        //     browsers: ['last 15 versions']
        // }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', ['style']);
});

gulp.task('default', ['start', 'watch']);