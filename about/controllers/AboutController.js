var app = angular.module('app');

app.controller('AboutController', function($scope, $http, $filter, toastr, $base64, $rootScope, $route) {
    	
    	$route.reload();
	    var valueToPass = "0";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

});
