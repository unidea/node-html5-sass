# A template for building simple Web Site using HTML and SASS

This is a template for building simple Web site using **html5**, **javascript** and **css**.  **browsersync** is used as the preview server.
**Gulp tasks** are used to build everything, including compiling sass and minifying javascript.

## Installation

First, you must [download and install](https://nodejs.org/) node.js.  The node package manager (npm) will be installed at the same time.
You will also need to [install git](https://git-scm.com/) as **bower** requires node, npm and git.
After, use `npm` command to install **gulp** and **bower** globally.

```bash
sudo npm install -g gulp-cli
sudo npm install -g bower
```

Finally, clone this repository, go to your project folder and run both `npm install` and `bower install`.  To start the server, type `gulp`.

## How it's work

Gulp will watch for change in the src folder, complete some tasks and output the result to the build folder.

1. html files will be copied to there respective folder.
2. scss files will converted to css.
3. js files will be copied minified and concatenated to a single scripts.min.js file.
4. vendor plugins in src/vendor will be copied integrally into build/vendor.

---

#### Main packages

* [bower](http://bower.io/)
* [gulp](http://gulpjs.com/)
* [sass](http://sass-lang.com/)
* [browser-sync](https://www.browsersync.io/)

#### Gulp related packages

* [gulp-concat](https://www.npmjs.com/package/gulp-concat)
* [gulp-sass](https://www.npmjs.com/package/gulp-sass)
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)

#### Miscellaneous packages

* [del](https://www.npmjs.com/package/del)

---

## License

[MIT](./LICENSE).
