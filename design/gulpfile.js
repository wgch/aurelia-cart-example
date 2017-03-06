'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    reload = function () {
        browserSync.reload();
    };


// Sass stuff
gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./assets/css'))
        .pipe(gulp.dest('./../assets/css'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./**/*.html", reload);
    gulp.watch("./sass/*", ['sass', reload]);
});


// Default task
gulp.task('default', ['serve']);
