var app = angular.module('app');

app

    .controller('CreditController',function($scope,$http,$filter,toastr,$base64,$rootScope) {
    	var valueToPass = "0";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

	    var url_address = 'geJSONt/data.php?page=course_downloads';

			$http.get(url_address).then(

				function(data) {

					$scope.course_downloads = data.data.pagedata;
					
				},
				function(err) {

					console.log(err);

				});

		//歷屆學長姐
		var url_address_course_graduate = 'geJSONt/data.php?page=course_graduate';

			$http.get(url_address_course_graduate).then(

				function(data) {

					$scope.course_graduate = data.data.pagedata;
					
				},
				function(err) {

					console.log(err);

				});

		//修課規定
		var url_address_course_rules = 'geJSONt/data.php?page=course_rules';

			$http.get(url_address_course_rules).then(

				function(data) {

					$scope.course_rules = data.data.pagedata;

				},
				function(err) {

					console.log(err);

				});
    })
    .controller('CreditController_EN',function($scope,$http,$filter,toastr,$base64,$rootScope) {
    	var valueToPass = "0";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

	    var valueEN = "1";
    	$rootScope.$broadcast('eventMenuENCtrl', valueEN);

	    var url_address = 'geJSONt/data.php?page=course_downloads';

			$http.get(url_address).then(

				function(data) {

					$scope.course_downloads = data.data.pagedata;
					
				},
				function(err) {

					console.log(err);

				});

		//歷屆學長姐
		var url_address_course_graduate = 'geJSONt/data.php?page=course_graduate';

			$http.get(url_address_course_graduate).then(

				function(data) {

					$scope.course_graduate = data.data.pagedata;
					
				},
				function(err) {

					console.log(err);

				});

		//修課規定
		var url_address_course_rules = 'geJSONt/data.php?page=course_rules';

			$http.get(url_address_course_rules).then(

				function(data) {

					$scope.course_rules = data.data.pagedata;

				},
				function(err) {

					console.log(err);

				});
    });