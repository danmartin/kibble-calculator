
// Include gulp
var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	phpunit = require('gulp-phpunit'),
	plumber = require('gulp-plumber'),
	exec = require('child_process').exec,
	concat = require('gulp-concat'),
 	_ = require('lodash'),
 	config = {
	     cssDir: 'assets/css/',
	     jsDir: 'assets/js/build/',
	     bowerDir: 'bower_components/bootstrap-sass/assets/' ,
	};

gulp.task('bootstrap', function(){
	gulp.src(config.cssDir + 'scss/application.scss')
	 	.pipe(sass({includePaths: [config.bowerDir + 'stylesheets/']}))
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sass({style: 'compressed', errLogToConsole: true}))
		.pipe(minifycss())
		.pipe(rename('app.min.css'))
		.pipe(gulp.dest(config.cssDir))
		.pipe(notify("CSS compiled and minified"));
});

gulp.task('scripts', function() {
  return gulp.src([config.bowerDir + 'javascripts/bootstrap.js', config.jsDir + 'app.js'])
    .pipe(concat('app.build.js'))
    .pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('assets/js/'))
	.pipe(notify("JS uglified, and shit got done"));
});

gulp.task('watch', function(){
	gulp.watch('assets/css/scss/**/*.scss', ['bootstrap']);
	gulp.watch('assets/js/build/app.js', ['scripts']);
});

gulp.task('default', ['watch']);


