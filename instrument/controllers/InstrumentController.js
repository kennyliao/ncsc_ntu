var app = angular.module('app');

app

    .controller('InstrumentController',function($scope,$http,$filter,toastr,$base64,$rootScope) {

    	var valueToPass = "0";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

    });