// --------------------------------------------------------------------------------------------
// Plugins
// --------------------------------------------------------------------------------------------
var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    wiredep     = require('wiredep');
// --------------------------------------------------------------------------------------------
// File Path
// --------------------------------------------------------------------------------------------
var paths = {
  index : 'app/index.html',
  css   : 'app/css/**/*.css',
  js    : [
    'app/env.js',
    'app/js/**/*.module.js',
    'app/js/**/*.js'
]};
// --------------------------------------------------------------------------------------------
// Tasks
// --------------------------------------------------------------------------------------------
gulp.task('vendorjs', function() {
    return gulp
      .src(wiredep().js)
      .pipe(gulp.dest('app/vendor'))
});
gulp.task('vendorcss', function() {
    return gulp
      .src(wiredep().css)
      .pipe(gulp.dest('app/vendor'))
});
gulp.task('inject-vendor', ['vendorcss', 'vendorjs'], function() {
  return gulp
    .src(paths.index)
    .pipe($.debug({title: 'index'}))
    .pipe(wiredep.stream({
      fileTypes: {
        html: {
          replace: {
            js: function (filePath) {
              return '<script src="' + 'vendor/' + filePath.split('/').pop() + '"></script>';
            },
            css: function (filePath) {
              return '<link rel="stylesheet" href="' + 'vendor/' + filePath.split('/').pop() + '"/>';
            }
          }
        }
      }
    }))
    .pipe(gulp.dest('./app'))
});
gulp.task('injectjs', ['inject-vendor'], function () {
  console.log('Injecting JavaScript files');
  return gulp
    .src(paths.index)
    .pipe($.inject(gulp.src(paths.js, {read: false}), {relative: true}))
    .pipe(gulp.dest('./app'));
});
gulp.task('injectcss', ['injectjs'], function () {
  console.log('Injecting CSS files');
  return gulp
    .src(paths.index)
    .pipe($.inject(gulp.src(paths.css, {read: false}), {relative: true}))
    .pipe(gulp.dest('./app'));
});

gulp.task('default', ['injectjs', 'vendorcss', 'vendorjs', 'inject-vendor', 'injectcss']);
// --------------------------------------------------------------------------------------------
// Watches
// --------------------------------------------------------------------------------------------
gulp.task('watch', function () {
    gulp
      .watch([paths.css, paths.js], ['injectcss', 'injectjs'])
      .on('change', function(event){
        console.log('File ' + event.path + ' was ' + event.type);
      })
});