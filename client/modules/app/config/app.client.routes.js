'use strict';

// Setting up route
angular.module('app').config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
		// Home state routing
		$urlRouterProvider.otherwise('/');
		$stateProvider.
		state('app', {
			url: '/',
			templateUrl: 'modules/app/views/app.client.view.html'
		});
	}
]);