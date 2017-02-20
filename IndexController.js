var app = angular.module('app');

app

    .controller('IndexController',function($scope,$http,$filter,toastr,$base64,$rootScope,$location) {
		
    	$scope.date = new Date();
		
		//判斷$location.path()是否一致
		$scope.$on('membersid', function(event, value1) {

	     	if($location.path()=='/members/members_form/'+value1){
	        
	   			$scope.membersisActive = true;
	   			
	   		}
	   		else if($location.path()=='/members/members_form_en/'+value1){
	        
	   			$scope.membersisActive = true;
	   			
	   		}
	   				
	    })

	    //判斷$location.path()是否一致
		$scope.$on('aboutid', function(event, value1) {
	
	     	if($location.path()=='/about/about_form/'+value1){
	        
	   			$scope.aboutisActive = true;
	   			
	   		}
	   		else if($location.path()=='/about/about_form_en/'+value1){
	        
	   			$scope.aboutisActive = true;
	   			
	   		}
	   				
	    })

	    //判斷$location.path()是否一致
		$scope.$on('newsid', function(event, value1) {
	   
	     	if($location.path()=='/news/news_form/'+value1){
	        
	   			$scope.newsisActive = true;
	   			
	   		}
	   		else if($location.path()=='/news/news_form_en/'+value1){
	        
	   			$scope.newsisActive = true;
	   			
	   		}
	   		else if($location.path()=='/news/news_more/'+value1){
	        
	   			$scope.newsisActive = true;
	   			
	   		}
	   		else if($location.path()=='/news/news_en_more/'+value1){
	        
	   			$scope.newsisActive = true;
	   			
	   		}
	   				
	    })
	    
		//判斷目前是否為首頁
	    $scope.$on('eventMenuCtrl', function(event, value) {
	    		
	    	if(value=='1'){
	    		$scope.homepage = true;
	    		
	    		var pagenow='home';
	        	$scope.page=pagenow;
	        		
	        	
	    	}
	        else{
	        	
	        	//判斷目前頁面是中文或英文頁面
	        	var pagenow=value;
	        	
	        	if(pagenow.match("_en")=='_en'){
					var pagesplit = pagenow.split("_en");
					$scope.page=pagesplit[0];

	        	}
	        	else{
	        		
	        		$scope.page=pagenow;
	        		
	        	}
	        	
	        	$scope.homepage = false;
	        	$scope.$location = $location;
	        	
	        	$scope.membersisActive = false; 
	        	$scope.newsisActive = false;
	        	$scope.aboutisActive = false;
	        		        
	        }
	        
	    })

	    $scope.$on('eventMenuENCtrl', function(event, valueEN) {
	    		
	    	if(valueEN=='1'){
	    		$scope.en = true;	    		
	    	}
	    	else{
	    		$scope.en = false;	
	    	}

	    })

	    $scope.click = function () {

		   $('.collapse').collapse('hide');
		   
		};


    });