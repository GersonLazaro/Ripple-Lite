
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require("gulp-babel");
var cssnano = require('gulp-cssnano');


gulp.task('default', ['build-js']);

gulp.task('build-js', function () {
	gulp.src(['src/js/ripple-lite.js','src/js/ripple-element.js','src/js/ripple-container.js','src/js/ripple-effect.js','src/js/init.js'])
	.pipe(concat('ripple-lite.js'))
    .pipe(babel())
    .pipe(gulp.dest('build/js/'))
});

gulp.task('compress-js', function () {
	gulp.src(['src/js/ripple-lite.js','src/js/ripple-element.js','src/js/ripple-container.js','src/js/ripple-effect.js','src/js/init.js'])
    .pipe(concat('ripple-lite.min.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'))
})

gulp.task('build-css', function() {
    gulp.src('src/css/*.css')
    .pipe(concat('ripple-lite.css'))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('compress-css', function() {
    gulp.src('src/css/*.css')
    .pipe(concat('ripple-lite.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('build/css/'));
});