var gulp = require('gulp'),
    sass = require('gulp-sass'),                     /*.pipe(sass())*/
    notify = require('gulp-notify'),                 /*.pipe(notify('Done! scc apdates'))*/
    less = require('gulp-less'),                    /*.pipe(less())*/
    debug = require('gulp-debug'),              /*.pipe(sourcemaps.init())*/
    sourcemaps = require('gulp-sourcemaps'),/*.pipe(debug({title:'Come On!'}))*/
    concat = require('gulp-concat'),             /*.pipe(concat(outputFilename))*/
    cleanCSS = require('gulp-clean-css'),      /*.pipe(gulpif(argv.prod, cleanCSS()))*/
    gulpIf = require('gulp-if'),
    argv = require('yargs').argv,                /*.pipe(gulpif(argv.prod, cleanCSS()))*/
    browser_sync = require('browser-sync'),        /*.pipe(browser-sync())*/
    clean = require('gulp-clean'),               /*.pipe(browser-sync())*/
    rename = require('gulp-rename'),         /* .pipe(rename('newFileName.js'))*/
    uglify = require('gulp-uglify'),             /* .pipe(rename('newFileName.js'))*/
    cache = require('gulp-cache'),
    cssnano = require('gulp-cssnano'),
    uglifyjs = require('gulp-uglifyjs'),
    pngquant = require('imagemin-pngquant'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),        /*.pipe(csscomb())*/
    shorthand = require('gulp-shorthand'),      /*.pipe(shorthand())*/
    shrthnd = require('shrthnd'),
    postcss = require('gulp-postcss'),
    important = require('postcss-important-shorthand'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    mutipipe = require('multipipe'),
    stream_combiner2 = require('stream-combiner2').obj,
    newer = require('gulp-newer'), //.pipe(newer(imgDest))
    sylus = require('gulp-stylus');

/*https://learn.javascript.ru/screencast/gulp#gulp-basics*/

// const  isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV =='development';

var isDevelopment = false; // Development (without maps )
//let  isDevelopment = true; // Public ( with maps )

gulp.task('clean', function () {
    return del('public');
});

// gulp.task('rel' , function () {
//  browser_sync.reload({stream: true});
// });


gulp.task('serv', function () {
    browser_sync.init(
        {server: 'public'}
    );
    // browser_sync.watch('public/**/*.*').on('change', browser_sync.reload);
});

// gulp.task('less_1_IF',function(){
//     return gulp.src('frontend/styles/*.less',{base:'frontend'})
//     .pipe(gulpIf(function (file) {
//        return (file.extname === '.css');      /*Not work  IF syntax WTF*/
//     },sourcemaps.init()))
//     .pipe(less())
//     .pipe(concat('styles/all.css'))
//     .pipe(gulpIf(isDevelopment),sourcemaps.write())
//     .pipe(gulp.dest('publc'));
//
// });


gulp.task('less_1_if_stream_combiner2', function () {

    return stream_combiner2(
        gulp.src('app/less/*.less', {base: 'app'}), // Как задать переменную из комапндной строки?
        newer('public'),
        debug({title: 'newer :'}),
        gulpIf(isDevelopment, sourcemaps.init()),
        less(),
        concat('css/all.css'),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('public'),
        browser_sync.reload({stream: true})
    )
        .on('error', notify.onError());

});


gulp.task('less_1_if_multipipe', function () {

    return mutipipe(
        gulp.src('frontend/styles/*.less', {base: 'frontend'}), // Как задать переменную из комапндной строки?
        newer('public'),
        debug({title: 'newer :'}),
        gulpIf(isDevelopment, sourcemaps.init()),
        less(),
        concat('styles/all.css'),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('public'),
        browser_sync.reload({stream: true})
    )
        .on('error', notify.onError());

});


gulp.task('less_1_dev_or_pub_Two_if', function () {
    return gulp.src('frontend/styles/*.less', {base: 'frontend'}) // Как задать переменную из комапндной строки?
        .pipe(newer('public'))
        .pipe(debug({title: 'newer :'}))
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(less())
        .on('error', notify.onError(function (err) {
            return {
                title: 'LESS',
                message: err.message
            };
        }))
        .pipe(concat('styles/all.css'))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('public'))
        .pipe(browser_sync.reload({stream: true}));

});
gulp.task('assets', function () {
    return gulp.src('frontend/assets/**/*.*')
        .pipe(debug({title: 'src :'}))
        .pipe(newer('public'))
        .pipe(debug({title: 'newer :'}))
        .pipe(gulp.dest('public'))
        .pipe(browser_sync.reload({stream: true}));
});

gulp.task('build', gulp.series('clean', gulp.parallel('less_1_dev_or_pub_Two_if', 'assets')));

gulp.task('less_1_dev_or_pub_One', function () {
    var papeline = gulp.src('frontend/styles/*.less', {base: 'frontend'});
    if (isDevelopment) {
        papeline = papeline.pipe(sourcemaps.init());
    }

    papeline = papeline.on('data', function (file) {
        console.log({
            sourceMap: file.sourceMap,
            relative: file.relative
        });
    });

    papeline = papeline
        .pipe(less())
        .pipe(concat('styles/all.css'));
    if (isDevelopment) {
        papeline = papeline.pipe(sourcemaps.write());
    }

    return papeline.pipe(gulp.dest('public'));

});


gulp.task('less_1', function () {
    return gulp.src('frontend/styles/*.less', {base: 'frontend'})
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('styles/all.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('publc'));

});


gulp.task('less', function () {

    return gulp.src('frontend/styles/*.less', {base: 'frontend'})

    // .pipe(debug({title: 'src :'}))
    // .on('data',function (file) {
    //     console.log({
    //         relative : file.relative
    //     })
    // })

        .pipe(sourcemaps.init())
        .pipe(debug({title: 'sourcemaps :'}))
        .on('data', function (file) {
            console.log({
                sourceMap: file.sourceMap,
                relative: file.relative
            });
        })

        .pipe(less())
        .pipe(debug({title: 'less :'}))
        .on('data', function (file) {
            console.log({
                // relative : file.relative,
                sourceMap: file.sourceMap
            });
        })

        .pipe(concat('styles/all.css'))
        .pipe(debug({title: 'concat :'}))
        .on('data', function (file) {
            console.log({
                // relative : file.relative,
                sourceMap: file.sourceMap
            });
        })

        .pipe(sourcemaps.write())
        .pipe(gulp.dest('publc'));

});


gulp.task('paths_files', function () {
    return gulp.src(['source/**/*.js', 'source/**/*.{css|html}'], {read: false})  // minimatch
        .on('data', function (file) {
            console.log({
                contents: file.content,
                path: file.path,
                base: file.base,
                //    path components helpers
                relative: file.relative,
                dirname: file.dirname,
                basename: file.basename,
                stem: file.stem,
                extname: file.extname
            });
        })
        .pipe(gulp.dest(function (file) {
            return file.extname == '.js' ? 'dest/js' :
                file.extname == '.css' ? 'dest/css' :
                    file.extname == '.html' ? 'dest/html' :
                        'dest';

        }));
});

gulp.task('hello', function (callback) {
    console.log("Hello!");
    callback();
});
gulp.task('watch', function () {
    gulp.watch('frontend/assets/*.*', gulp.series('assets', 'build'));
    gulp.watch('frontend/styles/*.*', gulp.series('less_1_if_stream_combiner2', 'build'));
});


gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serv')));

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*http://webdesign-master.ru/blog/tools/2016-03-09-gulp-beginners.html*/
// gulp.task('move_to_dist',function () {
//     return gulp.src('app/sass/*.css')
//     .pipe(rename('**/sass/*_sass.css'))
//     .pipe(debug({title: 'move:'}))
//         .pipe(gulp.dest('dist/css/'));
// });

// gulp.task('clean', function () {
//     return gulp.src('*/dist')
//     .pipe(clean({force: true}));
// });

// gulp.task('browser_sync', function() { // Создаем таск browser-sync
//     browser_sync({ // Выполняем browserSync
//         server: { // Определяем параметры сервера
//             baseDir: 'app' // Директория для сервера - app
//         },
//         notify: false // Отключаем уведомления
//     });
// });

// gulp.task('concat' , function () {
//     return gulp.src('app/sass/*.css')
//     .pipe(concat('mane_sass_i.css'))
//     .pipe(debug({title: 'concat:'}))
//     .pipe(gulp.dest('app/css/'))
//
// });

// gulp.task('concat_l_s', gulp.series('browser_sync'), function () {
//     return gulp.src(['app/css/mane_less_i.css','app/css/mane_scss_i.css'], { allowEmpty: true })
//     .pipe(concat('mane.css'))
//     .pipe(debug({title: 'concat:'}))
// .pipe(shorthand())
//     .pipe(gulp.dest('app/css/'))
//     .pipe(browser_sync.reload({stream: true})) // Обновляем CSS на странице при изменении
//     .pipe(debug({title: 'Reloading:'}))
//
// });
//
// gulp.task('sass' ,function() { // Создаем таск Sass
//     return gulp.src(['app/sass/mane_sass.sass','app/sass/mane_tmp.sass'], { allowEmpty: true }) // Берем источник
//     .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
//     .pipe(debug({title: 'sass compiller:'}))
//     .pipe(concat('mane_sass_i.css'))
//     .pipe(debug({title: 'concat:'}))
//     .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
// .pipe(shorthand())
// .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
/*.pipe(browser_sync.reload({stream: true}))*/ // Обновляем CSS на странице при изменении
// });

// gulp.task('reload', series('browser_sync'), function() {
//     gulp.src('app')
//     .pipe(browser_sync.reload({stream: true}))
// });

// gulp.task('less' ,function() { // Создаем таск Sass
//     return gulp.src(['app/less/mane_less.less','app/less/mane_tmp.less'], { allowEmpty: true }) // Берем источник
//     .pipe(less()) // Преобразуем Sass в CSS посредством gulp-sass
//     .pipe(debug({title: 'less compiller:'}))
//     .pipe(concat('mane.css'))
//     .pipe(debug({title: 'concat:'}))
//     .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
// .pipe(shorthand())
//     .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
//     .pipe(browser_sync.reload({stream: true})) // Обновляем CSS на странице при изменении
// });


// gulp.task('watch', function() {
// gulp.watch('app/sass/*.sass', gulp.parallel('concat_l_s','sass')); // Наблюдение за sass файлами
// gulp.watch('app/less/*.less', gulp.parallel('less','concat_l_s')); // Наблюдение за less файлами
// gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
/* gulp.watch(['app/js/common.js', 'app/libs/!**!/!*.js'], gulp.parallel('scripts')); */// Наблюдение за главным JS файлом и за библиотеками
// });

// gulp.task('code', function() {
//     return gulp.src('app/*.html')
//     .pipe(browser_sync.reload({ stream: true }))
// });

/*Оптимизатор CSS*/
// gulp.task('shorthand', function () {
//     return gulp.src('app/css/mane.css')
//     .pipe(shorthand())
//     .pipe(debug({title: 'shorthand :'}))
//     .pipe(gulp.dest('app/css'));
// });
//
// gulp.task('postcss', function () {
//     return gulp.src('app/css')
//     .pipe(postcss([
//         important
//     ]))
//     .pipe(gulp.dest('app'));
// });


// gulp.task('default', gulp.parallel('sass','less', 'browser_sync', 'watch'));
// gulp.task('default', gulp.series('less','concat_l_s', 'browser_sync', 'watch'));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*-----------------------------------------------------------------------------------------------------------------------*/


// gulp.task('default', gulp.parallel('css-libs', 'sass', 'scripts', 'browser-sync', 'watch'));
// gulp.task('build', gulp.parallel('prebuild', 'clean', 'img', 'sass', 'scripts'));
//
// gulp.task('scripts', function() {
//     return gulp.src([ // Берем все необходимые библиотеки
//         'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
//         'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
//     ])
//     .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
//     .pipe(uglify()) // Сжимаем JS файл
//     .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
// });
//
//
//
// gulp.task('css-libs', function() {
//     return gulp.src('app/css/libs.css') // Выбираем файл для минификации
//     .pipe(cssnano()) // Сжимаем
//     .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
//     .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
// });
//
// gulp.task('clean', async function() {
//     return del.sync('dist'); // Удаляем папку dist перед сборкой
// });
//
// gulp.task('clear', function (callback) {
//     return cache.clearAll();
// });
//
// gulp.task('img', function() {
//     return gulp.src('app/img/**/*') // Берем все изображения из app
//     .pipe(cache(imagemin({ // С кешированием
//         // .pipe(imagemin({ // Сжимаем изображения без кеширования
//         interlaced: true,
//         progressive: true,
//         svgoPlugins: [{removeViewBox: false}],
//         use: [pngquant()]
//     }))/**/)
//     .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
// });
//
// gulp.task('prebuild', async function() {
//
//     var buildCss = gulp.src([ // Переносим библиотеки в продакшен
//         'app/css/main.css',
//         'app/css/libs.min.css'
//     ])
//     .pipe(gulp.dest('dist/css'))
//
//     var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
//     .pipe(gulp.dest('dist/fonts'))
//
//     var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
//     .pipe(gulp.dest('dist/js'))
//
//     var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
//     .pipe(gulp.dest('dist'));
//
// });

/*----------------------------------------------------------------------------------------------------------------------------*/

//------------------------------------------------------
/*Неизвестный прием с функции в функции*/
// gulp.task('orign', function() {
//     return gulp.watch('../**/**.sass', function(obj) {
//         gulp.src(obj.path)
//         // .pipe(rename('newFileName.js'))
//         .pipe(gulp.dest('dist/sass'));
//     });
// });
//------------------------------------------------------

//------------------------------------------------------
/*Дефолт таск с задачами*/
// gulp.task('default' ,  gulp.series(''));
//------------------------------------------------------

//------------------------------------------------------
/*Пример конфига*/
// var config = {
//     srcDir: './app',
//     stylePattern: '/sass/*.+(sass|scss)'
// };
//-----------------------------------------------------

//--------------------------------------------------------
/*Наблюдатель за sass с дебагом*/
// var app = {};
//
// app.addStyle = function(paths, outputFilename) {
//     return gulp.src(paths)
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(debug({title: 'sass:'}))
//     .pipe(concat(outputFilename))
//     .pipe(debug({title: 'concat:'}))
//     .pipe(gulpif(argv.prod, cleanCSS()))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('.app/css'));
// };
//
//
// gulp.task('styles_sass', function() {
//     app.addStyle([
//
//         config.srcDir + '/sass/*.sass',
//         /*config.srcDir+'/sass/responsive.scss'*/
//     ], 'main.css');
//     app.addStyle([
//         config.srcDir+'/sass/compare.scss'
//     ], 'compare.css');
//
//
// });
//
// gulp.task('watch_sass', function () {
//     gulp.watch(config.srcDir+'/'+config.stylePattern, gulp.series('styles_sass'))
// });
//
// gulp.task('default', gulp.parallel('styles_sass', 'watch_sass'));
// ----------------------------------------------------------------------

//----------------------------------------------------------------------
/*Компиллер sass с маской выбора и уведомлением*/
// gulp.task('sass',function () {
//     return gulp.src(['!app/sass/mane_tmp.+(sass|scss)', 'app/sass/*.sass'])
//         .pipe(sass())
//         .pipe(notify('Done! sass apdates'))
//         .pipe(gulp.dest('app/css'))
//         .pipe(browser_sync.reload({stream: true}));
// });
//---------------------------------------------------------------------

//---------------------------------------------------------------------
/*Групповой вочер*/
// gulp.task('watch', function () {
//     gulp.watch('app/sass/*.sass' , gulp.series('sass' ));
// gulp.watch('*.html' , gulp.series());
// gulp.watch('dest/*.html' , gulp.series('html'));
// });
//---------------------------------------------------------------------


//---------------------------------------------------------------------
/*Запуск браузер-синг*/
// gulp.task('browser-sync', function () {
//     browser_sync({
//         server: {
//             baseDir: 'app'
//         }
//     })
// });
//---------------------------------------------------------------------

//---------------------------------------------------------------------
/*Пустой дефолт с уведомлением*/
// gulp.task('default' ,  function () {
//     console.log('DFAULT))))))))))))))))))))))))))))))))))))))))))))))))))');
// });
//---------------------------------------------------------------------

/*Удаление отдельного файла*/
// var srcPaths = [ "src/**/assets/**/*" ]
// var destPath = "dest/"
// gulp.src( srcPaths )
// .pipe( collate("assets") )
// .pipe( deleted( destPath , [
//     "**/*",
//     "!index.html"
// ]))
// .pipe( changed(destPath) )
// .pipe( gulp.dest( destPath ) );
//------------------------------------------------------------------------
/* csscomb  причесывает CSS*/
// var csscomb = require('gulp-csscomb');
//
// gulp.task('styles', function() {
//     return gulp.src('src/styles/main.css')
//     .pipe(csscomb())
//     .pipe(gulp.dest('./build/css'));
// });
// ------------------------------------------------------------------------

/*Оптимизатор CSS*/
// gulp.task('default', function () {
//     return gulp.src('src/index.css')
//     .pipe(shorthand())
//     .pipe(gulp.dest('dest'));
// });

/*Плагин shrthnd(*/
// var shorthandedCss = shrthnd('app/css/mane.css');
// console.log(shorthandedCss.string);


/*'postcss-important-shorthand'  'gulp-postcss'*/
// var important = require('postcss-important-shorthand');
//
// gulp.task('css', function () {
//     return gulp.src('./src')
//     .pipe(postcss([
//         important
//     ]))
//     .pipe(gulp.dest('./dist'));
// });
