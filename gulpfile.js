// --------------------------------------------------------------------------------------------
// Plugins
// --------------------------------------------------------------------------------------------
var gulp    = require('gulp'),
    inject  = require('gulp-inject');

// --------------------------------------------------------------------------------------------
// File Path
// --------------------------------------------------------------------------------------------
var paths = {
  index : "app/index.html", 
  css   : "app/css/**/*.css",
  envjs : "app/env.js", 
  module: "app/js/**/*.module.js",
  js    : "app/js/**/*.js"
};

// --------------------------------------------------------------------------------------------
// Settings
// --------------------------------------------------------------------------------------------
gulp.task('default', ['watch']);

gulp.task('index', function () {
  gulp.src(paths.index)
    .pipe(inject(gulp.src([paths.css, paths.envjs, paths.module, paths.js], {read: false}), {relative: true}))
    .pipe(gulp.dest('./app'));
});

gulp.task('watch', ['index'], function () {
    gulp.watch([paths.css, paths.module, paths.js], ['index']);
});