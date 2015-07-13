(function () {
	'use strict';

	angular
		.module('app')
		.directive('myDir', dir);

	function dir() {

		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
				elem.bind('click', function () {
					angular.element(document.getElementById('pane'))
						.append('<div id="temp" my-close><img src="' + scope.item.url + '" alt="img"/></div>');

				});
			}
		};
	}


}());