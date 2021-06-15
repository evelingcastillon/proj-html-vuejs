let mix = require('laravel-mix');

mix
.js('src/app.js', 'js')
.sass('src/app.scss', 'css')
.copyDirectory('src/img', 'dist/img')
.copyDirectory('src/svg', 'dist/svg')
.setPublicPath('dist');