const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

// 1. $ gulp watch
// 2. Load/Reload extension on chrome
gulp.task('watch', () => {
  $.livereload.listen();

  gulp.watch([
    '*.html',
    '*.js',
    '*.css',
    '*.json'
  ]).on('change', $.livereload.reload);
});
