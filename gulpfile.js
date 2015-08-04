var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy:false});

gulp.task('scripts', function(){
    //combine all js files of the app
    gulp.src(['!./app/**/*_test.js','./app/**/*.js'])
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src(['!./app/index.html',
        './app/**/*.html'])
        .pipe(plugins.angularTemplatecache('templates.js',{standalone:true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('scss', function(){
    gulp.src('./app/app.scss')
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(gulp.dest('./build'));
});

gulp.task('vendorJS', function(){
    //concatenate vendor JS files
    gulp.src([
        './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap/dist/js/bootstrap.js',
        './bower_components/admin-lte/dist/js/app.js',
        './bower_components/admin-lte/plugins/slimScroll/jquery.jquery.slimscroll.js',
        './bower_components/admin-lte/plugins/fastclick/fastclick.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-route/angular-route.js'
        ])
        .pipe(plugins.concat('lib.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('vendorCSS', function(){
    //concatenate vendor CSS files
    gulp.src([
        './bower_components/bootstrap/dist/css/bootstrap.css',
        './bower_components/bootstrap/dist/css/bootstrap-theme.css',
        './bower_components/admin-lte/dist/css/AdminLTE.css',
        './bower_components/admin-lte/dist/css/skins/_all-skins.css'
        ])
        .pipe(plugins.concat('lib.css'))
        .pipe(gulp.dest('./build'));

    gulp.src(['./bower_components/ionicons/css/ionicons.min.css'])
        .pipe(gulp.dest('./build/ionic/'));
});

gulp.task('copy-fonts', function() {
    gulp.src(['./bower_components/bootstrap/fonts/**','./bower_components/ionicons/fonts/**'])    
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('copy-index', function() {
    gulp.src('./app/index.html')    
        .pipe(gulp.dest('./build'));
});

gulp.task('watch',function(){
    gulp.watch([
        'build/**/*.html',        
        'build/**/*.js',
        'build/**/*.css'        
    ], function(event) {
        return gulp.src(event.path)
            .pipe(plugins.connect.reload());
    });
    gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch('./app/**/*.scss',['scss']);
    gulp.watch('./app/index.html',['copy-index']);

});

gulp.task('connect', plugins.connect.server({
    root: ['build'],
    port: 9000,
    livereload: true
}));

gulp.task('default',['connect','scripts','templates','scss','copy-index','copy-fonts','vendorJS','vendorCSS','watch']);