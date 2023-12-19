export const config = {
    'outputDir':'./frontend',
    'os':'',// если ставится на винде то прописать win
    'webServer': {
        'port': 3000,
        'notyfy':false
    },
    'styles': {
        'versions': ["last 3 versions"],
        'cascade': true,
        'webpClassForCSS': ".webp",
        'noWebpClassForCSS':".no-webp"
    },
    'images': {
        'progressive': true,
        'svgoPlugins': [{ removeViewBox: false }],
        'interlaced': true,
        'optomizationLevel': 3   //0-7
    },
    'svgStrite':{ // https://www.npmjs.com/package/gulp-svg-sprite
        stack: {
            sprite: `../icons/sprite.svg`,
            example:true
        }

},


}