var app = angular.module('app');

app

    .controller('NewsController',function($scope,$http,$filter,toastr,$base64,$rootScope) {
    	var valueToPass = "0";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);


	    var url_address = 'geJSONt/data.php?page=news';

			$http.get(url_address).then(

				function(data) {
					
					$scope.news = data.data.pagedata;
					// alert(data.data.pagedata['0'].contentEN);
					// console.log($scope.news);
					console.log(data);
				},
				function(err) {

					console.log(err);

				});
    });

    // data.products = $.grep(data.products, function( a ) {
    //     return (a.proType == 'ap');
    // });