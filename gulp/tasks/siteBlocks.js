import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg"
import versionNumber from "gulp-version-number"

export const siteBlocks = () => {
    return app.gulp.src(app.path.src.pages)
        .pipe(fileinclude())
        .pipe(app.plugins.replace('../', ''))
        .pipe(webpHtmlNosvg())
        .pipe(
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js'
                    ]
                },
                'output': {
                    'file':'gulp/version.json'
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.pages))
        .pipe(app.plugins.browserSync.stream())
}