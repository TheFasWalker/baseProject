import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'

export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.gulp.src(app.path.src.images))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(imagemin({
            progressive: app.config.images.progressive,
            svgoPlugins: app.config.images.svgoPlugins,
            interlaced: app.config.images.interlaced,
            optomizationLevel: app.config.images.optomizationLevel,
        }))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
}