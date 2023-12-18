import replace from "gulp-replace"; //поиск и замена
import browserSync from "browser-sync"; // локальный сервер
import newer from "gulp-newer";



export const plugins = {
    replace: replace,
    browserSync: browserSync,
    newer:newer
}