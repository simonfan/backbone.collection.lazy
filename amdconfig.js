require.config({
	urlArgs: 'bust=0.7905714311636984',
	baseUrl: '/',
	paths: {
		'backbone.collection.lazy': 'src/backbone.collection.lazy',
		backbone: 'bower_components/backbone/backbone',
		jquery: 'bower_components/jquery/jquery',
		'requirejs-text': 'bower_components/requirejs-text/text',
		text: 'bower_components/requirejs-text/text',
		requirejs: 'bower_components/requirejs/require',
		underscore: 'bower_components/underscore/underscore',
		lazy: 'bower_components/lazy.js/lazy'
	},
	shim: {
		backbone: {
			exports: 'Backbone',
			deps: [
				'jquery',
				'underscore'
			]
		},
		underscore: {
			exports: '_'
		},
		lazy: {
			exports: 'Lazy',
		}
	}
});
