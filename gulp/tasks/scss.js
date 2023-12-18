import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';




const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(app.plugins.replace('../public', '../'))
        .pipe(sass({
            outputStyle:'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpCss({
            webpClass: app.config.styles.webpClassForCSS,
            noWebpClass: app.config.styles.noWebpClassForCSS
        }))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserslist: app.config.styles.versions,
            cascade: app.config.styles.cascade
        }))
        // .pipe(cleanCss())
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}