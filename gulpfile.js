var gulp = require("gulp");
var path = require("path");
var browserify = require("gulp-browserify");
var concat = require("gulp-concat");
var jade = require("gulp-jade");
var rename = require("gulp-rename");

var srcDir = "./app";
var distDir = "./dist";
var jsDir = distDir + "/js";
var cssDir = distDir + "/css";

gulp.task("browserify", function () {
  gulp.src("app/app.js", {entry: true})
  .pipe(browserify({
    transform: [
      "jadeify"
    ]
  }))
  .pipe(gulp.dest(jsDir));
});

gulp.task("html-index", function () {
  gulp.src(files.html.index)
  .pipe(jade({
    dev: false
  }))
  .pipe(gulp.dest(distDir));
});

gulp.task("copy", function () {
  gulp.src(files.copy.fonts)
  .pipe(gulp.dest(distDir + "/fonts"));
  gulp.src(files.copy.img)
  .pipe(gulp.dest(distDir + "/img"));
});

gulp.task("build", ["browserify", "html-index", "copy"]);