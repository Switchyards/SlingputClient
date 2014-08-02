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
  gulp.src("./layout/index.jade")
  .pipe(jade({
    dev: false
  }))
  .pipe(gulp.dest(distDir));
});

gulp.task('css', function() {
  gulp.src(['layout/styles/css/cover.css'])
    .pipe(concat('app.css'))
    .pipe(gulp.dest(cssDir))
});


gulp.task("build", ["browserify", "html-index", "css"]);