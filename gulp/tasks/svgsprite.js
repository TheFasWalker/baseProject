import svgSprite from "gulp-svg-sprite"


export const svgsprite = () => {
    console.log('======')
    console.log('   ')
    console.log('Сборка svg спрайта')
    console.log('   ')
    console.log('======')
    return app.gulp.src(`${app.path.src.svgicons}`)
        .pipe(svgSprite({
            mode:app.config.svgSprite
    }))
    .pipe(app.gulp.dest(`${app.path.src.svgSprite}`))
}