(function () {
	'use strict';
	
	angular
		.module('app')
		.directive('myClose', dir);
	
	function dir() {

		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
					elem.bind('click', function() {
						angular.element(document.getElementById('temp')).remove();
					});
			}
		};
	}
	
	
}());