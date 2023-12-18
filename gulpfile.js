import gulp from 'gulp';


import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import { config } from './gulp/config/config.js';

//передача значений в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
    config:config
}

//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { resetFiles, resetPageStructure } from './gulp/tasks/resetFiles.js';
import { siteBlocks } from './gulp/tasks/siteBlocks.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js'
import { svgsprite } from './gulp/tasks/svgsprite.js';

//обработка шрифтом + добавление в fonts.scss
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

//экспортирование для подключения к внешним командам в package.json





//слежка за изменениями
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.pages, siteBlocks)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images , images)
}

// export { svgsprite, fonts }

const mainTasks = gulp.series( gulp.parallel(copy, siteBlocks, scss, js, images))


//сценарии
const dev = gulp.series(resetFiles, mainTasks, copy, gulp.parallel(watcher, server))



gulp.task('fonts', fonts);
gulp.task('svgsprite', svgsprite);

gulp.task('default', dev);