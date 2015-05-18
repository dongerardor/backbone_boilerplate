/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	app.Router = Backbone.Router.extend({
		routes: {
			'*filter'	: 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			app.Filter = param || '';

			//app.collection.trigger('filter');
		}
	});
})();
