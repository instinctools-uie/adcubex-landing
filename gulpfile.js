const gulp = require('gulp');
const templateRender = require('gulp-nunjucks-render');
const browserSync = require('browser-sync').create();
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

const jsFolders = ['mainPage', 'innerPage', 'contactPage'];
const cssFolders = ['articlePage', 'mainPage', 'synergyPage', 'strategyPage', 'insightsPage', 'solutionsPage', 'contactPage', 'privacyPolicyAndImprintPage'];

gulp.task('connect', () => {
  connect.server({
    base: 'http://localhost',
    port: 3000,
    root: './build',
    livereload: true
  });
});

gulp.task('js', () => {
  jsFolders.forEach(folderName => {
    browserify(`./src/js/${folderName}/index.js`)
      .transform(babelify)
      .bundle()
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(`./build/js/${folderName}`))
      .pipe(connect.reload());
  });
});

gulp.task('css', () => {
  cssFolders.forEach(folderName => {
    gulp.src(`./src/css/${folderName}/index.css`)
      .pipe(cleanCSS({compatibility: 'ie10'}))
      .pipe(concat('index.css'))
      .pipe(gulp.dest(`build/css/${folderName}`))
  });
});

gulp.task('generateHTML', () => {
  gulp.src('./src/**/*.html')
    .pipe(templateRender({
      path: ['./src/templates']
    }))
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('txt', () => {
  gulp.src('./src/*.txt')
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('fonts', () => {
  gulp.src(mainBowerFiles('**/*.{eot,svg,ttf,woff,woff2}', () => {})
    .concat('./src/assets/fonts/**/*'))
    .pipe(gulp.dest('build/assets/fonts'));
});

gulp.task('image', () => {
  gulp.src('./src/assets/images/**/*')
    .pipe(image())
    .pipe(gulp.dest('./build/assets/images'));
});

gulp.task('meta', () => {
  gulp.src('./src/assets/meta/*')
    .pipe(image())
    .pipe(gulp.dest('./build/assets/meta'));
});

gulp.task('listen', () => {
  gulp.watch('./src/**/**/*.js', ['js']);
  gulp.watch('./src/**/**/*.css', ['css']);
  gulp.watch('./src/**/*.html', ['generateHTML']);
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('default', ['js', 'css', 'generateHTML', 'txt', 'fonts', 'image', 'meta', 'connect', 'listen', 'browser-sync']);

gulp.task('build', ['js', 'css', 'generateHTML', 'txt', 'fonts', 'image', 'meta']);

