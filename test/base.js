(function(name, factory) {

	var mod = typeof define !== 'function' ?
		// node
		'../src' :
		// browser
		'backbone.collection.lazy',
		// dependencies for the test
		deps = [mod, 'should', 'backbone', 'lodash'];

	if (typeof define !== 'function') {
		// node
		factory.apply(null, deps.map(require));
	} else {
		// browser
		define(deps, factory);
	}

})('test', function(LazyCollection, should, Backbone, _) {
	'use strict';

	describe('LazyCollection basics', function () {
		beforeEach(function () {
			this.dataset = [
				{ id: 1, name: 'Banana', color: ['yellow','green'], flavor: ['sweet'], size: 'medium' },
				{ id: 2, name: 'Apple', color: ['green','yellow','red'], flavor: ['sweet','citric'], size: 'small' },
				{ id: 3, name: 'Watermelon', color: ['green'], flavor: ['sweet'], size: 'big' },
				{ id: 4, name: 'Melon', color: ['yellow'], flavor: ['sweet'], size: 'medium', },
				{ id: 5, name: 'Lemon', color: ['yellow','green'], flavor: ['citric'], size: 'small' }
			];
		});

		it('can be initialized without exploding (;', function () {
			var collection = new LazyCollection(this.dataset);

			collection.should.be.type('object');
		});

		it('has a filter method that runs lazily', function() {
			var collection = new Backbone.Collection(this.dataset),
				lazy = new LazyCollection(this.dataset),
				filter = function(model) {
					return model.get('size') === 'small';
				}

			var normal = _.pluck(collection.filter(filter), 'attributes'),
				lazy = _.pluck(lazy.filter(filter).toArray(), 'attributes');

			normal.should.eql(lazy);
		});
	});
});
