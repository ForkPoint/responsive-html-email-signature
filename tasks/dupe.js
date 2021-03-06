'use strict';

var gulp = require('gulp'),
    del = require('del');

function dupeTask(options){
  gulp.task('dupe', function(){
    del.sync([options.workingDir]);

    return options
      .src([options.source + '/**/*'])
      .pipe(gulp.dest('./' + options.workingDir));
  });
}

module.exports = dupeTask;
