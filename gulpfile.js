var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var babelify   = require('babelify');
var buffer     = require('vinyl-buffer');
var uglify     = require('gulp-uglify');
var rimraf     = require('rimraf');
var webpack    = require('webpack');
var run        = require('gulp-run');

/**
 * Examples Build
 */
gulp.task('build-examples', function() {
  return browserify({
           debug   : process.env.NODE_ENV != 'production',
           entries : [
             'examples/app.js'
           ]
         })
         .transform(babelify)
         .bundle()
         .pipe(source('app.js'))
         .pipe(buffer())
         .pipe(uglify())
         .pipe(gulp.dest('examples/build'));
});

gulp.task('build-onepeace', function() {
  return run('bash ../one-peace/updateWinterfell.sh').exec();
});

gulp.task('watch-examples', function() {
  return gulp.watch([
    'src/**/*.js',
    'examples/**/*.js',
    '!examples/build/app.js'
  ], {}, function() {
    return gulp.start('build-examples');
  });
});

gulp.task('watch-src', function(){
  return gulp.watch([
    'src/*.js',
    'src/**/*.js'
    ], {}, function(){
      return gulp.start('build-onepeace');
    });
});