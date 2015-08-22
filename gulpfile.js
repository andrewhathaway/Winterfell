var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var reactify   = require('reactify');
var babelify   = require('babelify');
var buffer     = require('vinyl-buffer');

/**
 * Dist Build
 */
gulp.task('build-dist', function() {
  return browserify({
           debug   : process.env.NODE_ENV != 'production',
           entries : [
             'src/index.js'
           ]
         })
         .transform(babelify)
         .bundle()
         .pipe(source('winterfell.js'))
         .pipe(buffer())
         .pipe(gulp.dest('dist'));
});

gulp.task('watch-dist', function() {
  return gulp.watch([
    'src/**/*.js',
    '!dist/winterfell.js'
  ], {}, function() {
    return gulp.start('build-dist');
  });
});

/**
 * Dev Build
 */
gulp.task('build-dev', function() {
  return browserify({
           debug   : process.env.NODE_ENV != 'production',
           entries : [
             'dev/test.js'
           ]
         })
         .transform(reactify, {
           es6 : true
         })
         .bundle()
         .pipe(source('app.js'))
         .pipe(buffer())
         .pipe(gulp.dest('dev/build'));
});

gulp.task('watch-dev', function() {
  return gulp.watch([
    'src/**/*.js',
    'dev/**/*.js',
    '!dev/build/app.js'
  ], {}, function() {
    return gulp.start('build-dev');
  });
});