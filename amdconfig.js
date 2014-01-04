require.config({
	urlArgs: 'bust=0.6013299347832799',
	baseUrl: '/',
	paths: {
		requirejs: 'bower_components/requirejs/require',
		text: 'bower_components/requirejs-text/text',
		mocha: 'node_modules/mocha/mocha',
		should: 'node_modules/should/should',
		'backbone.collection.lazy': 'src/backbone.collection.lazy',
		backbone: 'bower_components/backbone/backbone',
		jquery: 'bower_components/jquery/jquery',
		'requirejs-text': 'bower_components/requirejs-text/text',
		underscore: 'bower_components/underscore/underscore',
		lazy: 'bower_components/lazy.js/lazy',
		lodash: 'bower_components/lodash/dist/lodash.compat'
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
