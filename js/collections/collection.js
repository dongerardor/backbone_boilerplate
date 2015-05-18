/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	app.Collection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.ModelItem,

		localStorage: new Backbone.LocalStorage('localStorage-0'),

		// Items are sorted by their original insertion order.
		comparator: null
	});

})();