export const server = () => {
    app.plugins.browserSync.init({
        server: {
            baseDir: `${app.path.build.pages}`
        },
        notify: `${app.config.webServer.notyfy}`,
        port:`${app.config.webServer.port}`
    })
}