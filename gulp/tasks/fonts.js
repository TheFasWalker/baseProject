import fs from 'fs';
import fonter from 'gulp-fonter'; //для винды
import fonterUnix from 'gulp-fonter-unx'// для linux
import ttf2woff2 from 'gulp-ttf2woff2'; //ttf=>woff2

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.src.fonts}/**/*.otf`, {})
        .pipe(fonter({
            subset: [66,67,68, 69, 70, 71],
        formats:['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.src.fonts}`))
}
export const ttfToWoff = () => {
    if (app.config.os == 'win') {
        console.log('windows')
        return app.gulp.src(`${app.path.src.fonts}/*.ttf`, {})
        .pipe(fonter({
            formats:['woff']
        }))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        .pipe(app.gulp.src(`${app.path.src.fonts}/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.src(app.path.src.fontsTtf))
        .pipe(app.gulp.dest(app.path.build.fonts))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    } else {
        console.log('linux')
        return app.gulp.src(`${app.path.src.fonts}/*.ttf`, {})
        .pipe(fonterUnix({
            formats:['woff']
        }))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        .pipe(app.gulp.src(`${app.path.src.fonts}/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        .pipe(app.gulp.src(app.path.src.fontsTtf))
        .pipe(app.gulp.dest(app.path.build.fonts))
    }

}
export const fontsStyle = () => {

    let fontsFile = `${app.path.srcFolder}/public/styles/fonts.scss`;
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {

        if (fontsFiles) {
            if (!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (var i = 0; i < fontsFiles.length; i++) {
                    let fontFileName = fontsFiles[i].split('.')[0];
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500
                        } else if (fontWeight.toLowerCase() === 'semobold') {
                            fontWeight = 600
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() == 'heavy') {
                            fontWeight = 800
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900
                        } else {
                            fontWeight = 400
                        }
                        fs.appendFile(fontsFile,
                            `@font-face{\n\tfont-family:${fontName};\n\tfont-display:swap;\n\tsrc:\n\t\turl ("../fonts/${fontFileName}.woff2" format("woff2")),\n\t\turl ("../fonts/${fontFileName}.woff" format("woff")),\n\t\turl ("../fonts/${fontFileName}.ttf" format("ttf"));\n\tfont-weight:${fontWeight};\n\tfont-style:normal;\n\t}\n\t`, cb);
                        newFileOnly = fontFileName
                    }
                }
                console.log(`=========`)
                console.log('   ')
                console.log(`шрифты сконвертированы и перенесены в папку ${app.path.build.fonts}`)
                console.log(`подключение шрифтов в созданном файле ${app.path.srcFolder}/public/styles/fonts.scss`)
                console.log('   ')
                console.log(`=========`)
            } else {
                console.log('======WARNING====== \n\n Подключение новых шрифтов невозможно. удалите файл fonts.scss \n\n ======WARNING====== ')
            }
        }
    });
    return app.gulp.src(`${app.path.srcFolder}`)
    function cb(){}
}