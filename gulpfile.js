const { src, dest, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function css() {
    return src('src/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('index.css'))
        .pipe(dest('build/'))
}

function js() {
    return src('src/js/*.js')
      .pipe(babel({presets: ['es2015']}))
        // .pipe(uglify()) //Minimize js files
        .pipe(concat('index.js'))
        .pipe(dest('build/'));
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);