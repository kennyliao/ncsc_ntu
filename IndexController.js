var app = angular.module('app');

app

    .controller('IndexController',function($scope,$http,$filter,toastr,$base64,$rootScope) {
		
		//判斷目前是否為首頁
	    $scope.$on('eventMenuCtrl', function(event, value) {
	    	// alert(value);	
	    	if(value=='1'){
	    		$scope.homepage = true;
	    	}
	        else{
	        	$scope.homepage = false;
	        }
	        
	    })


    });