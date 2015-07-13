(function () {
	'use strict';

	angular
		.module('app')
		.controller('MyController', MyController);

	function MyController(httpFactory, resourceFactory) {
		var self = this;
		self.list = [];
		httpFactory.httpGet().success(listFill, errMsg);

		// To use $resource uncomment next line		
		//resourceFactory.resourceGet().query(listFill);

		function listFill(data) {
			self.list = data;
		}

		function errMsg(data, status) {
			console.log(err.status + ':' + err.data);
			self.list = [];
		}
	}

}());