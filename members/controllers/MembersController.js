var app = angular.module('app');

app

    .controller('MembersController',function($scope,$http,$filter,toastr,$base64,$rootScope) {
    	//非首頁
    	var valueToPass = "0";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);


	    var url_address = 'geJSONt/data.php?page=members';

			$http.get(url_address).then(

				function(data) {

					$scope.members = data.data.pagedata;
					$scope.chunkedData = chunk($scope.members, 4);


					
					// alert(data.data.pagedata['0'].contentEN);
					// console.log($scope.chunkedData);
					
				},
				function(err) {

					console.log(err);

				});

				function chunk(arr, size) {
				  var newArr = [];
				  for (var i=0; i<arr.length; i+=size) {
				    newArr.push(arr.slice(i, i+size));
				  }
				  return newArr;
				};

		

    })
    .controller('MembersFormController',function($scope,$http,$filter,toastr,$base64,$rootScope,$location,$stateParams) {
    	//非首頁
    	var valueToPass = "0";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

	   			
	   			// alert(JSON.stringify($stateParams));
                var value=$stateParams.id;           
                var url_address = '../geJSONt/data_members.php?page=members&id='+value;
              
                $http.get(url_address).then(

				function(data) {

					$scope.model = data.data.pagedata;

					
				},
				function(err) {

					console.log(err);

				});

           


	   
	    
    })
    ;