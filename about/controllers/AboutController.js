var app = angular.module('app');

app.controller('AboutController', function($scope, $http, $filter, toastr, $base64, $rootScope, $route) {
    	
    	$route.reload();
	    var valueToPass = "0";
	    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

})
.controller('AboutFormController', function($scope, $http, $filter, toastr, $base64, $rootScope, $location, $stateParams) {
    //非首頁
    var valueToPass = "0";
    $rootScope.$broadcast('eventMenuCtrl', valueToPass);

    var value = $stateParams.id;
    $rootScope.$broadcast('aboutid', value);

    if(value=='1'){
    	$scope.model=[{"Name":"王美月","title":"行政助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }else if(value=='2'){
    	$scope.model=[{"Name":"張美琳","title":"專任助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }else if(value=='3'){
    	$scope.model=[{"Name":"林美麗","title":"計畫助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }else if(value=='4'){
        $scope.model=[{"Name":"林美麗","title":"計畫助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }else if(value=='5'){
        $scope.model=[{"Name":"林美麗","title":"計畫助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }else if(value=='6'){
        $scope.model=[{"Name":"林美麗","title":"計畫助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }
   
})
.controller('AboutController_EN', function($scope, $http, $filter, toastr, $base64, $rootScope) {
    
    var valueToPass = "0";
    $rootScope.$broadcast('eventMenuCtrl', valueToPass);
    
    var valueEN = "1";
    $rootScope.$broadcast('eventMenuENCtrl', valueEN);

})
.controller('AboutFormController_EN', function($scope, $http, $filter, toastr, $base64, $rootScope, $stateParams) {
    
    var valueToPass = "0";
    $rootScope.$broadcast('eventMenuCtrl', valueToPass);
    
    var valueEN = "1";
    $rootScope.$broadcast('eventMenuENCtrl', valueEN);
    
    var value = $stateParams.id;
    $rootScope.$broadcast('aboutid', value);

    if(value=='1'){
        $scope.model=[{"Name":"王美月","title":"行政助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }else if(value=='2'){
        $scope.model=[{"Name":"張美琳","title":"專任助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }else if(value=='3'){
        $scope.model=[{"Name":"林美麗","title":"計畫助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }else if(value=='4'){
        $scope.model=[{"Name":"林美麗","title":"計畫助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }else if(value=='5'){
        $scope.model=[{"Name":"林美麗","title":"計畫助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }else if(value=='6'){
        $scope.model=[{"Name":"林美麗","title":"計畫助理","phone":"+886 - 2 - 33663827","mail":"ntuncsc@ntu.edu.tw","Name_EN":"Wang","title_EN":"Department of Psychology Associate Professor"}];
    }

})
;
