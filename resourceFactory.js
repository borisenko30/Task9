(function () {
	'use strict';

	angular
		.module('app')
		.factory('resourceFactory', request);

	function request($resource) {
		return {
			resourceGet: function () {
				return $resource('http://jsonplaceholder.typicode.com/albums/1/photos');
			}
		};
	}

}());