'use strict';

var gulp = require('gulp');
var conf = require('./conf');
var path = require('path');

var ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['default'], function () {
    return gulp.src(path.join(conf.paths.dist, '/**/*'))
        .pipe(ghPages());
});
