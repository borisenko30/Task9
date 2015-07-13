(function () {
	'use strict';

	angular
		.module('app')
		.factory('httpFactory', request);

	function request($http) {
		return {
			httpGet: function () {
				return $http.get('http://jsonplaceholder.typicode.com/albums/1/photos');
			}
		};
	}

}());