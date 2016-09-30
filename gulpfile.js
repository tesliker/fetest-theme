var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  gulpIf = require('gulp-if'),
  eslint = require('gulp-eslint'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant');
  sourcemaps = require('gulp-sourcemaps');
  babel = require('gulp-babel');
  concat = require('gulp-concat');
   
gulp.task('imagemin', function () {
    return gulp.src('./src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./images'));
});


gulp.task('sass', function () {
  gulp.src('./src/sass/global/global.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/global/'));
});

gulp.task('babel', function() {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('global.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js/global'));
});

gulp.task('watch', function(){
    // livereload.listen();
    gulp.watch('src/images/*', ['imagemin']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['babel']);
    gulp.watch(['css/style.css', './**/*.html.twig', './js/*.js'], function (files){
        livereload.changed(files)
    });
});
