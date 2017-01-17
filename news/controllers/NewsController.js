var app = angular.module('app');

app

.controller('NewsController', function($scope, $http, $filter, toastr, $base64, $rootScope) {
    var valueToPass = "news";
    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

    //最新消息年份篩選(自動讀取今年年份)
    var d = new Date();
    $scope.yearnow=d.getFullYear();
   

    $scope.filteredTodos = [], $scope.currentPage = 1, $scope.numPerPage = 10, $scope.maxSize = 5;

    var url_address = 'geJSONt/data.php?page=home_news';

    $http.get(url_address).then(

        function(data) {

            $scope.news = data.data.pagedata;

            //最新消息-分頁
            $scope.$watch('currentPage + numPerPage', function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                    end = begin + $scope.numPerPage;
                $scope.filteredTodos = $scope.news.slice(begin, end);

            })
        },
        function(err) {

            console.log(err);

        });

    $scope.year = function(value) {

        var url_address = 'geJSONt/data_years.php?page=news&id=' + value;

        $http.get(url_address).then(

            function(data) {

                $scope.news = data.data.pagedata;

            },
            function(err) {

                console.log(err);

            });

    };

    $scope.more = function(value) {

        var url_address = 'geJSONt/data.php?page=news_type&id=' + value;

        $http.get(url_address).then(

            function(data) {

                $scope.news = data.data.pagedata;

            },
            function(err) {

                console.log(err);

            });

    };



})

.controller('NewsFormController', function($scope, $http, $filter, toastr, $base64, $rootScope, $location, $stateParams) {
    //非首頁
    var valueToPass = "news";
    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

    var value = $stateParams.id;

    //傳news id 至 indexController 
    $rootScope.$broadcast('newsid', value);

    var url_address = 'geJSONt/data_news.php?page=news&id=' + value;
    $http.get(url_address).then(

        function(data) {

            $scope.model = data.data.pagedata;


        },
        function(err) {

            console.log(err);

        });

    //最新消息返回功能
    $scope.back = function() {
        history.back();
    }
})

.controller('NewsMoreController', function($scope, $http, $filter, toastr, $base64, $rootScope, $location, $stateParams) {
    //非首頁
    var valueToPass = "news";
    $rootScope.$broadcast('eventMenuCtrl', valueToPass);


    $scope.filteredTodos = [], $scope.currentPage = 1, $scope.numPerPage = 10, $scope.maxSize = 5;

    var value = $stateParams.id;

    //傳news id 至 indexController 
    $rootScope.$broadcast('newsid', value);
    if (value == '1') {
        $scope.title = "演講";
        $scope.title_en = "SPEECHES";
    } else if (value == '2') {
        $scope.title = "研討會";
        $scope.title_en = "SEMINARS";
    } else if (value == '3') {
        $scope.title = "學分學程";
        $scope.title_en = "CREDIT COURSES";
    } else if (value == '4') {
        $scope.title = "得獎紀錄";
        $scope.title_en = "AWARDS";
    }



    var url_address = 'geJSONt/data.php?page=news_type&id=' + value;

    $http.get(url_address).then(

        function(data) {

            $scope.news = data.data.pagedata;

            //最新消息-分頁
            $scope.$watch('currentPage + numPerPage', function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                    end = begin + $scope.numPerPage;
                $scope.filteredTodos = $scope.news.slice(begin, end);

            })

        },
        function(err) {

            console.log(err);

        });

    //最新消息返回功能
    $scope.back = function() {
        history.back();
    }
})
.controller('NewsController_EN', function($scope, $http, $filter, toastr, $base64, $rootScope) {
    
    var valueToPass = "news_en";
    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

    //最新消息年份篩選(自動讀取今年年份)
    var d = new Date();
    $scope.yearnow=d.getFullYear();
    
    var valueEN = "1";
    $rootScope.$broadcast('eventMenuENCtrl', valueEN);

    $scope.filteredTodos = [], $scope.currentPage = 1, $scope.numPerPage = 10, $scope.maxSize = 5;

    var url_address = 'geJSONt/data.php?page=home_news';

    $http.get(url_address).then(

        function(data) {

            $scope.news = data.data.pagedata;

            //最新消息-分頁
            $scope.$watch('currentPage + numPerPage', function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                    end = begin + $scope.numPerPage;
                $scope.filteredTodos = $scope.news.slice(begin, end);

            })
        },
        function(err) {

            console.log(err);

        });

    $scope.year = function(value) {

        var url_address = 'geJSONt/data_years.php?page=news&id=' + value;

        $http.get(url_address).then(

            function(data) {

                $scope.news = data.data.pagedata;

            },
            function(err) {

                console.log(err);

            });

    };

    $scope.more = function(value) {

        var url_address = 'geJSONt/data.php?page=news_type&id=' + value;

        $http.get(url_address).then(

            function(data) {

                $scope.news = data.data.pagedata;

            },
            function(err) {

                console.log(err);

            });

    };

})
;
