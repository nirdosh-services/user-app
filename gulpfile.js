var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_clean = require('gulp-clean'),
    useref = require('gulp-useref'),
    gulpSequence = require('gulp-sequence');

gulp.task('compress', function(){
    return gulp
        .src('app/*/*.js')
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('js'))
        .pipe(gp_rename('uglify.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

});

gulp.task('clean', function(){
   return gulp
       .src(['js','dist'])
       .pipe(gp_clean({force:true}));
});

gulp.task('html', function () {
    return gulp.src(['app/bower_components/**/*',
                     'app/**/*.html','app/css/**',
                     'app/*.html'],{base: 'app'})
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulpSequence('clean','html'));