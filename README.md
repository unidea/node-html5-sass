# A template for building simple Web Site using HTML and SASS

This is a template for building Website using **html5**, **sass** and **node.js**.  **browsersync** is used as the
preview server.  **Gulp** is used to build everything, from compiling sass to minifying javascript.


## How it's work

First, you must install Node.js and have the following packages installed globally
sudo npm install -g gulp-cli
sudo npm install -g bower


## How it's work

Upon change, everything under src will by output to the build folder.
1. html files will be copied to there respective folder
2. scss files will converted to css
3. js files minified and concaneted to a single scripts.min.js 
4. vendor plugins will be copied integrally


## Packages

- [node.js]: https://nodejs.org/
- [bower]: http://bower.io/
- [gulp]: http://gulpjs.com/
- [sass]: http://sass-lang.com/
- [browser-sync]: https://www.browsersync.io/

### Gulp related packages

- [gulp-concat]: https://www.npmjs.com/package/gulp-concat
- [gulp-sass]: https://www.npmjs.com/package/gulp-sass
- [gulp-sourcemaps]: https://www.npmjs.com/package/gulp-sourcemaps
- [gulp-uglify]: https://www.npmjs.com/package/gulp-uglify

### Miscellaneous

- [del]: https://www.npmjs.com/package/del

## License

[MIT](./LICENSE).
