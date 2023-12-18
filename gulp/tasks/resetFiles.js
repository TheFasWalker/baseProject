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