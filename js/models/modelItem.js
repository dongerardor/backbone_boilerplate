/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	app.ModelItem = Backbone.Model.extend({

		defaults: {
			title: '',
			date: null
		}

	});
})();
