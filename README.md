Adding CSS @import to theme development
=====================

This guide will allow you to define your own folder structure for your stylesheets while building Shopify themes.

Stylesheets can be created and maintained in `css/` from your theme's root folder.

In the example `css/` folder there is a single `theme.scss.liquid` file that imports other stylesheets into it. Files starting with an underscore are not added to your `assets/` folder.

You can use Grunt or Gulp to achieve the same effect.

### Requirements
- Ruby 1.9+
- Node.js 0.10.22+ ([check and upgrade Node.js here](http://stackoverflow.com/questions/20887400/gruntjs-bus-error-grunt-watch))
- [Shopify Theme Gem](https://github.com/Shopify/shopify_theme)

### Basic theme structure
```
├── assets/
├── layout/
├── snippets/
├── templates/
│
├── // Non-theme files/folders (Theme Gem, Grunt, Gulp, etc.)
├── config.yml
├── css/
├── Gemfile
├── Gruntfile.js
├── package.json
├── gulpfile.js
└── node_modules/
```

Grunt.js
=====================
Navigate to your theme root in Terminal.

##### 1. Install grunt globally

```
npm install -g grunt-cli
```

You may have to use `sudo` for this.

##### 2. Move Gemfile, Gruntfile.js and package.json to your theme's root

##### 3. Install gulp (globally) and gulp-cssimport
```
npm install gulp
npm install gulp-cssimport
```
You may have to use `sudo` for this.

##### 4. Install required packages
```
npm install
```

##### 5. Run bundle install
```
bundle install
```

##### 6. Run grunt
```
grunt
```

That's it. Gruntfile.js will run both `theme watch` to upload new theme files to your store and `grunt gulp` to concatenate the stylesheets in `/css` at the same time.



Gulp.js
=====================
Navigate to your theme root in Terminal.

##### 1. Install gulp globally

```
npm install gulp
```
You may have to use `sudo` for this.

##### 2. Move gulpfile.js file in your theme's root

##### 3. Install required packages

```
npm install gulp-cssimport
```

##### 4. Run gulp watch
```
gulp watch
```

##### 5. Run Shopify theme gem
Make sure `config.yml` file is setup properly. [Docs here](https://github.com/Shopify/shopify_theme).
In a separate Terminal window that is still in your theme's root, run:
```
theme watch
```
