require.config({
	urlArgs: 'bust=0.31666698516346514',
	baseUrl: '/src',
	paths: {
		requirejs: '../bower_components/requirejs/require',
		text: '../bower_components/requirejs-text/text',
		mocha: '../node_modules/mocha/mocha',
		should: '../node_modules/should/should',
		'backbone.collection.lazy': 'index',
		backbone: '../bower_components/backbone/backbone',
		jquery: '../bower_components/jquery/jquery',
		lodash: '../bower_components/lodash/dist/lodash.compat',
		'requirejs-text': '../bower_components/requirejs-text/text',
		qunit: '../bower_components/qunit/qunit/qunit',
		underscore: '../bower_components/underscore/underscore',
		lazy: '../bower_components/lazy.js/lazy'
	},
	shim: {
		backbone: {
			exports: 'Backbone',
			deps: [
				'jquery',
				'underscore'
			]
		},
		lazy: {
			exports: 'Lazy'
		},
		underscore: {
			exports: '_'
		},
		mocha: {
			exports: 'mocha'
		},
		should: {
			exports: 'should'
		}
	}
});
