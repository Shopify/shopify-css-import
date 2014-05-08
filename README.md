Use @import with Shopify theme development
=====================

This guide will allow you to define your own folder structure for your stylesheets while building Shopify themes.

All styles will be created and maintained in a working directory from your theme's root folder. By using `@import` the files will be compiled to a master `theme.scss.liquid` file in your `/assets` directory.

Follow this guide to use the CSS @import function during your Shopify theme development.


You can use Grunt or Gulp to achieve the same effect.

Requirements
---------------------
- Ruby 1.9+
- Node.js 0.10.22+ ([check and upgrade Node.js here](http://stackoverflow.com/questions/20887400/gruntjs-bus-error-grunt-watch))
- [Shopify Theme Gem](https://github.com/Shopify/shopify_theme)

Basic structure
---------------
```
├── // Theme folder
├── assets/
├── layout/
├── snippets/
├── templates/
│
├── // Non-theme files/folders (Theme Gem, Grunt, Gulp, etc.)
├── config.yml
├── Gemfile
├── Gruntfile.js
├── package.json
├── gulpfile.js
└── node_modules/
```

Grunt.js
=====================
Navigate to your theme root in Terminal.

#### 1. Install grunt globally

```
npm install -g grunt-cli
```

You may have to use `sudo` for this.

#### 2. Create this package.json file in your theme's root
```
{
  "name": "shopify-sass-imports",
  "devDependencies": {
    "grunt": "~0.4.4",
    "grunt-concurrent": "~0.5.0",
    "grunt-contrib-watch": "~0.6.1",
    "grunt-exec": "~0.4.5",
    "grunt-gulp": "^0.1.0"
  }
}
```

#### 3. Install required packages
```
npm install
```

#### 4. Create this Gemfile in your theme's root
```
source 'https://rubygems.org'
gem 'shopify_theme', :git => 'git@github.com:Shopify/shopify_theme.git'
```

#### 5. Run bundle install
```
bundle install
```

#### 6. Run grunt
```
grunt
```

That's it. Gruntfile.js will run both `theme watch` to upload new theme files to their store and `grunt gulp` to concat the stylesheets in `/css` at the same time.



Gulp.js
=====================
Navigate to your theme root in Terminal.

#### 1. Install gulp globally

```
npm install - gulp
```
You may have to use `sudo` for this.

#### 2. Install gulp-cssimports

```
npm install gulp-cssimports
```

#### 3. Create this gulpfile.js file in your theme's root

```
// https://github.com/unlight/gulp-cssimport
var gulp = require('gulp');
var cssimport = require("gulp-cssimport");

// Process CSS
gulp.task('styles', function(){
  return gulp.src('css/**/*.*')
    .pipe(cssimport())
    .pipe(gulp.dest('assets/'));
})

// Watch files
gulp.task('watch', function () {
  gulp.watch('css/**/*.*', ['styles']);
});

// Default task
gulp.task('default', ['watch']);
```

#### 4. Run gulp watch
```
gulp watch
```

#### 5. Run Shopify theme gem
Make sure your config.yml file is setup properly. [Docs here](https://github.com/Shopify/shopify_theme).
In a separate them Terminal window that is still in your theme's root, run:
```
theme watch
```

Additional resources
---------------------
- [Themes Documentation][1]: Learn more about Liquid and theme templates.
- [Theme Gem][2]: Run the command line for a more intimate way of managing your theme files.
- [Desktop Theme Editor][3]: For Mac OS X users, we recommend our free app to sync theme files in development.
- [Liquid Tag Cheat Sheet][4]
- [Timber][5]: Shopify's ultimate theme framework.

License
---------------------
This repo is released under the [MIT License](LICENSE).

[1]: http://docs.shopify.com/themes
[2]: https://github.com/Shopify/shopify_theme
[3]: http://apps.shopify.com/desktop-theme-editor
[4]: http://cheat.markdunkley.com
[5]: http://shopify.com/timber
