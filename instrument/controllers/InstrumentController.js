var app = angular.module('app');

app

    .controller('InstrumentController',function($scope,$http,$filter,toastr,$base64,$rootScope) {

    	var valueToPass = "instrument";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

	    var url_address = 'geJSONt/data.php?page=instrument';

			$http.get(url_address).then(

				function(data) {

					$scope.instrument = data.data.pagedata;

				},
				function(err) {

					console.log(err);

				});

    })

	.controller('InstrumentController_EN', function($scope, $http, $filter, toastr, $base64, $rootScope) {
		
		var valueToPass = "instrument_en";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);
	    
	    var valueEN = "1";
	    $rootScope.$broadcast('eventMenuENCtrl', valueEN);

	    var url_address = 'geJSONt/data.php?page=instrument';

			$http.get(url_address).then(

				function(data) {

					$scope.instrument = data.data.pagedata;

				},
				function(err) {

					console.log(err);

				});

	})
    ;