'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator'),
    path = require('path'),
    fs = require('fs');

var Generator = module.exports = function Generator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.NamedBase);


Generator.prototype.files = function files() {
    this.template('_instance.js', this.name +'.js');
};
