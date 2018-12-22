var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('src/sass/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
	return gulp.src('src/img/**/*')
		.pipe(gulp.dest('build/img'))
		.pipe(browserSync.reload({stream: true}))

});

gulp.task('fonts', function () {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('build/fonts'))
		.pipe(browserSync.reload({stream: true}))

});

gulp.task("html", function () {
	return gulp.src("src/**/*.html")
		.pipe(gulp.dest("build"))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", [ 'sass', "html", 'img', 'fonts'], function () {
	browserSync.init({
		server: "./build",
		notify: false,
		ui: {
			port: 3000
		}
    });
    gulp.watch('src/sass/**/*.scss', ["sass"]);
    gulp.watch('src/**/*.html' , ['html']);
	gulp.watch('src/img/**/*', ["img"]);
});


gulp.task('default', ['html', 'sass', 'img', 'watch']);