var app = angular.module('app');

app

    .controller('DownloadController',function($scope,$http,$filter,toastr,$base64,$rootScope) {
    	var valueToPass = "links";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);


    })
    .controller('DownloadController_EN',function($scope,$http,$filter,toastr,$base64,$rootScope) {

    	var valueToPass = "links_en";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

	    var valueEN = "1";
    	$rootScope.$broadcast('eventMenuENCtrl', valueEN);


    });
    