import * as nodePath from 'path';
import { config } from '../../config.js';
const rootFolder =  nodePath.basename(nodePath.resolve());

const buildFolder = config.outputDir;
const srcFolder = './src';
export const path = {
    build: {
        js: `${buildFolder}/public/scripts/script.js`,
        files: `${buildFolder}/public/files/`,
        pages: `${buildFolder}/*.html`,
        css:`${buildFolder}/public/styles/`,
        images: `${buildFolder}/public/images/`,
        fonts:`${buildFolder}/public/fonts/`
    },
    src: {
        svg: `${srcFolder}/public/images/**/*.svg`,
        images: `${srcFolder}/public/images/**/*.{jpg,ppeg,png,gif,webp}`,
        js: `${srcFolder}/public/scripts/scripts.js`,
        files: `${srcFolder}/files/*.*`,
        pages: `${srcFolder}/*.php`,
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
        pages: `${srcFolder}/**/*.php`,
        scss: `${srcFolder}/public/styles/**/*.scss`,
    },
    clean: buildFolder,
    srcFolder:srcFolder
}