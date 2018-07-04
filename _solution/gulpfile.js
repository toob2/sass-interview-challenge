// language: ecmascript6

// Public requires:
const gulp = require("gulp");
const gSass = require("gulp-sass");
const gWatch = require("gulp-watch");
const gBatch = require("gulp-batch");
const gConnect = require("gulp-connect");

// Define gulp tasks and their dependencies + functions
gulp.task("default", ["buildCss"], noop);
gulp.task("watch", watch);
gulp.task("dev", ["watch", "server"], noop);
gulp.task("buildCss", buildCss);
gulp.task("server", server);

function server()
{
	gConnect.server(
	{
		root: "./"
		/*,	livereload: true*/
	});
};

function noop()
{
	// intentionally left blank
}

function watch()
{
	// Build an array of watched files:
	var watchedFiles = ["styles/scss/**/*.scss"];

	// Watch files and run task in response to changes:
	gWatch(watchedFiles, {}, gBatch(function(events, done)
	{
		gulp.start("default", done);
	}));
};

function buildCss()
{
	return gulp.src("./styles/scss/site.scss")
		.pipe(gSass(
		{
			outputStyle: "expanded" /*,"compressed"*/ ,
			includePaths: [
				"node_modules/susy/sass"
			]
		}).on("error", gSass.logError))
		.pipe(gulp.dest("styles/output/"))
};