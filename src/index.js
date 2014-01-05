//     BackboneCollectionLazy
//     (c) simonfan
//     BackboneCollectionLazy is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module BackboneCollectionLazy
 */

// dependency names vary for node and requirejs.
var lazyJsName = typeof define === 'function' ? 'lazy' : 'lazy.js';

/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(['backbone', lazyJsName], function (Backbone, Lazy) {
	'use strict';

	/**
	 * Lazy MUST be defined in amdconfig shim!
	 */

	var LazyCollection = Backbone.Collection.extend({});

	// Underscore methods that we want to implement on the Collection.
	// 90% of the core usefulness of Backbone Collections is actually implemented
	// right here:
	var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
		'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
		'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
		'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
		'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
		'lastIndexOf', 'isEmpty', 'chain', 'sample'];

	function mix(method) {
		LazyCollection.prototype[method] = function () {
			var lazy = Lazy(this.models),
				args = Array.prototype.slice.call(arguments);

			return lazy[method].apply(lazy, args);
		};
	}

	Lazy(methods).each(mix);

	return LazyCollection;
});
