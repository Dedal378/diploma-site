var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefix', function() {
    return gulp.src('css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css/'));
});