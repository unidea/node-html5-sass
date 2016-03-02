# A template for building simple Web Site using HTML and SASS

This is a template for building simple Web site using **html5**, **javascript** and **css**.  **browsersync** is used as the preview server.
**Gulp** is used to build everything, from compiling sass to minifying javascript.

## Installation

First, you must [download and install node.js](https://nodejs.org/).  **npm** (node package manager) will be installed at the same time.
You also need to install [git](https://git-scm.com/) as Bower requires node, npm and git.
After, use the npm to install **gulp** and **bower** globally.

`sudo npm install -g gulp-cli`
`sudo npm install -g bower`

Finally, clone this repository and run `npm install` and `bower install`.  To start the server, type `gulp`.

## How it's work

Upon change, everything under src will by output to the build folder.
1. html files will be copied to there respective folder
2. scss files will converted to css
3. js files minified and concaneted to a single scripts.min.js 
4. vendor plugins will be copied integrally

## Packages

* [bower](http://bower.io/)
* [gulp](http://gulpjs.com/)
* [sass](http://sass-lang.com/)
* [browser-sync](https://www.browsersync.io/)

### Gulp related packages

* [gulp-concat](https://www.npmjs.com/package/gulp-concat)
* [gulp-sass](https://www.npmjs.com/package/gulp-sass)
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)

### Miscellaneous

* [del](https://www.npmjs.com/package/del)

## License

[MIT](./LICENSE).
