var app = angular.module('app');

app

    .controller('MembersController', function($scope, $http, $filter, toastr, $base64, $rootScope) {
    //非首頁
        var valueToPass = "members";
        $rootScope.$broadcast('eventMenuCtrl', valueToPass);

        $scope.filteredTodos = [], $scope.currentPage = 1, $scope.numPerPage = 20, $scope.maxSize = 5;


        var url_address = 'geJSONt/data.php?page=members';
        $http.get(url_address).then(

            function(data) {

                $scope.members = data.data.pagedata;
                

                //分頁
                $scope.$watch('currentPage + numPerPage', function() {
                    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                        end = begin + $scope.numPerPage;

                    $scope.filteredTodos = $scope.members.slice(begin, end);
                    $scope.chunkedData = chunk($scope.filteredTodos, 4);

                })

            },
            function(err) {

                console.log(err);

            });

        function chunk(arr, size) {
            var newArr = [];
            for (var i = 0; i < arr.length; i += size) {
                newArr.push(arr.slice(i, i + size));
            }
            return newArr;
        };

        
        $scope.searchdataone = function() {


            var value = $scope.tchName;

            var url_address_secrchmember = 'geJSONt/search_member.php?page=members&id=' + value;
            $http.get(url_address_secrchmember).then(

                function(data) {

                    $scope.members = data.data.pagedata;
                    $scope.chunkedData = chunk($scope.members, 4);
                },
                function(err) {

                    console.log(err);

                });


        }


})

.controller('MembersController_EN', function($scope, $http, $filter, toastr, $base64, $rootScope) {
    //非首頁
        var valueToPass = "members_en";
        $rootScope.$broadcast('eventMenuCtrl', valueToPass);

        var valueEN = "1";
        $rootScope.$broadcast('eventMenuENCtrl', valueEN);

        $scope.filteredTodos = [], $scope.currentPage = 1, $scope.numPerPage = 20, $scope.maxSize = 5;

        var url_address = 'geJSONt/data.php?page=members';
        $http.get(url_address).then(


            function(data) {

                $scope.members = data.data.pagedata;

                //分頁
                $scope.$watch('currentPage + numPerPage', function() {
                    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                        end = begin + $scope.numPerPage;

                    $scope.filteredTodos = $scope.members.slice(begin, end);
                    $scope.chunkedData = chunk($scope.filteredTodos, 4);

                })
                

            },
            function(err) {

                console.log(err);

            });

        function chunk(arr, size) {
            var newArr = [];
            for (var i = 0; i < arr.length; i += size) {
                newArr.push(arr.slice(i, i + size));
            }
            return newArr;
        };

        
        $scope.searchdataone = function() {


            var value = $scope.tchName;

            var url_address_secrchmember = 'geJSONt/search_member.php?page=members&id=' + value;
            $http.get(url_address_secrchmember).then(

                function(data) {

                    $scope.members = data.data.pagedata;
                    $scope.chunkedData = chunk($scope.members, 4);
                },
                function(err) {

                    console.log(err);

                });


        }


})

.controller('MembersFormController', function($scope, $http, $filter, toastr, $base64, $rootScope, $location, $stateParams) {
    //非首頁
    var valueToPass = "members";
    $rootScope.$broadcast('eventMenuCtrl', valueToPass);


    var value = $stateParams.id;

    //傳member id indexController 
    $rootScope.$broadcast('membersid', value);

    var url_address = 'geJSONt/data_members.php?page=members&id=' + value;
    $http.get(url_address).then(

        function(data) {

            $scope.model = data.data.pagedata;

        },
        function(err) {

            console.log(err);

        });


});
