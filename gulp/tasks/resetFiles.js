import { deleteAsync} from 'del';

export const resetFiles = () => {
    return deleteAsync(app.path.build.files)
}
export const resetPageStructure = () => {
    return deleteAsync(app.path.build.pages)
}
export const resetCssFiles = () => {
    return deleteAsync(app.path.build.css)
}
export const resetJsFiles = () => {
    return deleteAsync(app.path.build.js)
}
export const resetImagesFiles = () => {
    return deleteAsync(app.path.build.images)
}