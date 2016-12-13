var app = angular.module('app');

app

    .controller('HomeController',function($scope,$http,$filter,toastr,$base64,$rootScope) {
		
		 var valueToPass = "1";
	     $rootScope.$broadcast('eventMenuCtrl', valueToPass);
		


		

    });