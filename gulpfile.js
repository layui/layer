/**
 layer构建
*/

var pkg = require('./package.json');

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var header = require('gulp-header');
var del = require('del');

var task = {
  layer: function() {
    gulp.src('./src/**/*.css')
    .pipe(minify({
      compatibility: 'ie7'
    }))
    .pipe(gulp.dest('./build'));
    
    return gulp.src('./src/layer.js').pipe(uglify())
     .pipe(header('/*! <%= pkg.name %>-v<%= pkg.version %> <%= pkg.description %> <%= pkg.license %> License  <%= pkg.homepage %>  By <%= pkg.author %> */\n ;', {pkg: pkg}))
    .pipe(gulp.dest('./build'));
    
  }
  ,mobile: function() {
    return gulp.src('./src/mobile/layer.js').pipe(uglify())
     .pipe(header('/*! <%= pkg.name %> mobile-v<%= pkg.mobile %> <%= pkg.description %> <%= pkg.license %> License  <%= pkg.homepage %>mobile  By <%= pkg.author %> */\n ;', {pkg: pkg}))
    .pipe(gulp.dest('./build/mobile'));
  }
  ,other: function(){
    gulp.src('./src/**/*.{png,gif}').pipe(rename({}))
    .pipe(gulp.dest('./build'));
  }
};


gulp.task('clear', function(cb){ //清理
  return del(['./build/*'], cb);
});
gulp.task('layer', task.minjs); //压缩PC版本
gulp.task('mobile', task.mincss); //压缩Mobile文件
gulp.task('other', task.other); //移动一些配件

//全部
gulp.task('default', ['clear'], function(){
  for(var key in task){
    task[key]();
  }
});






