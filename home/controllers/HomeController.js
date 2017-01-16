var app = angular.module('app');

app

    .controller('HomeController', function($scope, $http, $filter, toastr, $base64, $rootScope) {

    	var valueToPass = "1";
    	$rootScope.$broadcast('eventMenuCtrl', valueToPass);
    	var valueEN = "0";
    	$rootScope.$broadcast('eventMenuENCtrl', valueEN);

	    //最新消息
	    var url_address = 'geJSONt/data.php?page=home_news';
	    var url_address_hero = 'geJSONt/data.php?page=home_hero';
	    $http.get(url_address).then(


	        function(data) {

	            $scope.news = data.data.pagedata;


	        },
	        function(err) {

	            console.log(err);

	        });


	    $http.get(url_address_hero).then(

	        function(data) {

	            $scope.hero = data.data.pagedata;
	            //console.log(data);
	        },
	        function(err) {

	            console.log(err);

	        });

})
    
.controller('HomeController_EN', function($scope, $http, $filter, toastr, $base64, $rootScope) {
	
	var valueToPass = "1";
    $rootScope.$broadcast('eventMenuCtrl', valueToPass);
    
    var valueEN = "1";
    $rootScope.$broadcast('eventMenuENCtrl', valueEN);
    
    //最新消息
    var url_address = 'geJSONt/data.php?page=home_news';
    var url_address_hero = 'geJSONt/data.php?page=home_hero';
    $http.get(url_address).then(


        function(data) {

            $scope.news = data.data.pagedata;


        },
        function(err) {

            console.log(err);

        });


    $http.get(url_address_hero).then(

        function(data) {

            $scope.hero = data.data.pagedata;
            //console.log(data);
        },
        function(err) {

            console.log(err);

        });

});
