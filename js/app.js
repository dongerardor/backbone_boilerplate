/*global $ */
// inicio 14:40
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

var wholeThing;

$(function () {
	'use strict';


	// Create our global collection.
	app.collection = new app.Collection();

	//Create router
	app.router = new app.Router();
	Backbone.history.start();


	// kick things off by creating the `App`
	wholeThing = new app.GeneralView();
});
