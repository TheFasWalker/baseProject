import * as nodePath from 'path';
const rootFolder =  nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';
export const path = {
    build: {
        js: `${buildFolder}/public/scripts/`,
        files: `${buildFolder}/public/files/`,
        pages: `${buildFolder}/`,
        css:`${buildFolder}/public/styles/`,
        images: `${buildFolder}/public/images/`,
        fonts:`${buildFolder}/public/fonts/`
    },
    src: {
        svg: `${srcFolder}/public/images/**/*.svg`,
        images: `${srcFolder}/public/images/**/*.{jpg,ppeg,png,gif,webp}`,
        js: `${srcFolder}/public/scripts/scripts.js`,
        files: `${srcFolder}/files/*.*`,
        pages: `${srcFolder}/*.html`,
        scss: `${srcFolder}/public/styles/style.scss`,
        fonts: `${srcFolder}/public/fonts`,
        fontsTtf: `${srcFolder}/public/fonts/**/*.ttf`,
        svgicons: `${srcFolder}/svgsprite/*.svg`,
        svgSprite:`${srcFolder}/public/images/`,
    },
    watch: {
        images: `${srcFolder}/public/images/**/*.{jpg,ppeg,png,gif,webp,svg}`,
        js: `${srcFolder}/public/scripts/**/*.js`,
        files: `${srcFolder}/files/**/*.*`,
        pages: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/public/styles/**/*.scss`,
    },
    clean: buildFolder,
    srcFolder:srcFolder
}