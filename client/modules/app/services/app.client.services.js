'use strict';

// Authentication service for user variables
angular.module('app').factory('appService', ['$resource', function($resource) {
	return $resource(':url/:id', {},
		{
			'getArray': { isArray: true },
			'save': { method: 'POST' },
			'get': {method: 'GET'},
			'delete': {method: 'DELETE'},
			'update': { method: 'PUT' },
		});
},
]);