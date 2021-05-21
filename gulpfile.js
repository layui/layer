/**
 layer 构建
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
    .pipe(gulp.dest('./dist'));
    
    return gulp.src('./src/layer.js').pipe(uglify({
      output: {
        ascii_only: true //escape Unicode characters in strings and regexps
      }
    }))
     .pipe(header('/*! <%= pkg.realname %>-v<%= pkg.version %> <%= pkg.description %> <%= pkg.license %> License */\n ;', {pkg: pkg}))
    .pipe(gulp.dest('./dist'));
    
  }
  ,mobile: function() {
    return gulp.src('./src/mobile/layer.js').pipe(uglify({
      output: {
        ascii_only: true //escape Unicode characters in strings and regexps
      }
    }))
     .pipe(header('/*! <%= pkg.realname %> mobile-v<%= pkg.mobile %> <%= pkg.description %> <%= pkg.license %> License */\n ;', {pkg: pkg}))
    .pipe(gulp.dest('./dist/mobile'));
  }
  ,other: function(){
    gulp.src('./src/**/*.{png,gif}').pipe(rename({}))
    .pipe(gulp.dest('./dist'));
  }
};


gulp.task('clear', function(cb){ //清理
  return del(['./dist/*'], cb);
});
gulp.task('layer', task.minjs); //压缩PC版本
gulp.task('mobile', task.mincss); //压缩Mobile文件
gulp.task('other', task.other); //移动一些配件

//发行版本目录
var releaseDir = './release/zip/layer-v' + pkg.version;
var release = releaseDir + '/layer';

//打包发行版
gulp.task('clearZip', function(cb){ //清理
  return del([releaseDir], cb);
});
gulp.task('r', ['clearZip'], function(){
  gulp.src('./release/doc/**/*')
  .pipe(gulp.dest(releaseDir));
  
  return gulp.src([
    './dist/**/*'
    ,'!./dist/**/moon'
    ,'!./dist/**/moon/*'
  ])
  .pipe(gulp.dest(release));
});

//全部
gulp.task('default', ['clear'], function(){
  for(var key in task){
    task[key]();
  }
});






