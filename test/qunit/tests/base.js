define(['backbone.collection.lazy','backbone'], function(LazyCollection, Backbone) {

	return function() {

		module('Base', {
			setup: function() {
				window.dataset = [
					{ id: 1, name: 'Banana', color: ['yellow','green'], flavor: ['sweet'], size: 'medium' },
					{ id: 2, name: 'Apple', color: ['green','yellow','red'], flavor: ['sweet','citric'], size: 'small' },
					{ id: 3, name: 'Watermelon', color: ['green'], flavor: ['sweet'], size: 'big' },
					{ id: 4, name: 'Melon', color: ['yellow'], flavor: ['sweet'], size: 'medium', },
					{ id: 5, name: 'Lemon', color: ['yellow','green'], flavor: ['citric'], size: 'small' }
				];
			},
			teardown: function() {
				delete window.dataset;
			}
		});

		test('Initialization', function() {
			var collection = new LazyCollection(window.dataset);

			ok(collection);
		});

		test('filter', function() {
			var collection = new Backbone.Collection(window.dataset),
				lazy = new LazyCollection(window.dataset),
				filter = function(model) {
					return model.get('size') === 'small';
				}

			deepEqual(
				_.pluck(collection.filter(filter), 'attributes'),
				_.pluck(lazy.filter(filter).toArray(), 'attributes'),
				'Expect filter method to behave equally on both collections'
			);
		});

	}
});
