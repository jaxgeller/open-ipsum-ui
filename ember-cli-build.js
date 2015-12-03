/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var autoprefixer = require('autoprefixer');
var lost = require('lost');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    postcssOptions: {
      plugins: [ { module: autoprefixer, options: {browsers: ['last 2 version']} }, {module: lost} ],
      useSass: true,
      extension: 'scss'
    }
  });


  return app.toTree();
};

// 61 && 557
