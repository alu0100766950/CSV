/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  minifyHTML = require('gulp-minify-html');
  minifyCSS = require('gulp-minify-css');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('minify-js', function () {
  gulp.src('csv.js')
  .pipe(concat('minified_csv.js'))
  .pipe(uglify())
  .pipe(gulp.dest('minify/js'))
});

gulp.task('minify-html', function() {
	gulp.src('index.html')
	.pipe(concat('minified_index.html'))
  	.pipe(minifyHTML())
  	.pipe(gulp.dest('minify/html'))
});

gulp.task('minify-css', function() {
	gulp.src('global.css')
	.pipe(concat('minified_global.css'))
  	.pipe(minifyCSS({keepBreaks:true}))
  	.pipe(gulp.dest('minify/css'))
});