const gulp = require('gulp');
const connect = require('gulp-connect');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const buffer = require('vinyl-buffer');
const mainBowerFiles = require('main-bower-files');
const image = require('gulp-image');

gulp.task('connect', function() {
  connect.server({
    base: 'http://localhost',
    port: 3000,
    root: './build',
    livereload: true
  });
});

gulp.task('js', function() {
  browserify('./src/js/index.js')
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src('./src/index.css')
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(concat('index.css'))
    .pipe(gulp.dest('build/'))
});

gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('fonts', () => {
  return gulp.src(mainBowerFiles('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('assets/fonts/**/*'))
    .pipe(gulp.dest('build/assets/fonts'));
});

gulp.task('image', function () {
  gulp.src('./assets/images/*')
    .pipe(image())
    .pipe(gulp.dest('./build/assets/images'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./src/**/*.css', ['css']);
  gulp.watch('./src/*.html', ['html']);
});

gulp.task('default', ['js', 'css', 'html', 'fonts', 'image', 'connect', 'watch']);