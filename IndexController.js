var app = angular.module('app');

app

    .controller('IndexController',function($scope,$http,$filter,toastr,$base64,$rootScope,$location) {
		
		//判斷$location.path()是否一致
		$scope.$on('membersid', function(event, value1) {
	   
	     	if($location.path()=='/members/'+value1+'/members_form'){
	        
	   			$scope.membersisActive = true;
	   			
	   		}
	   		else if($location.path()=='/members/'+value1+'/members_form_en'){
	        
	   			$scope.membersisActive = true;
	   			
	   		}
	   				
	    })

	    //判斷$location.path()是否一致
		$scope.$on('newsid', function(event, value1) {
	   
	     	if($location.path()=='/news/'+value1+'/news_form'){
	        
	   			$scope.newsisActive = true;
	   			
	   		}
	   		else if($location.path()=='/news/'+value1+'/news_form_en'){
	        
	   			$scope.newsisActive = true;
	   			
	   		}
	   		else if($location.path()=='/news/'+value1+'/news_more'){
	        
	   			$scope.newsisActive = true;
	   			
	   		}
	   		else if($location.path()=='/news/'+value1+'/news_en_more'){
	        
	   			$scope.newsisActive = true;
	   			
	   		}
	   				
	    })
	    
		//判斷目前是否為首頁
	    $scope.$on('eventMenuCtrl', function(event, value) {
	    		
	    	if(value=='1'){
	    		$scope.homepage = true;
	    	}
	        else{

	        	$scope.homepage = false;
	        	$scope.$location = $location;
	        	
	        	$scope.membersisActive = false; 
	        	$scope.newsisActive = false;
	        		        
	        }
	        
	    })


    });