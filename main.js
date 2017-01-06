var app=angular.module('app',['ui.bootstrap','ui.router','angular-loading-bar','ngAnimate', 'toastr','base64','ngRoute',])
 
 //loading bar
 .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>';
  }]);