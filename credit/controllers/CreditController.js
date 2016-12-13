var app = angular.module('app');

app

    .controller('CreditController',function($scope,$http,$filter,toastr,$base64,$rootScope) {
    	var valueToPass = "0";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);
    });