app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            // url: '/home',
            // templateUrl: 'home.html',
            // controller:  'IndexController'
            url: '/home',
            templateUrl: 'home/views/views.html',
            controller:  'HomeController'
        })

       
        .state('about', {
            url: '/about',
           templateUrl: 'about/views/views.html',
           controller:  'AboutController'
            
        })
        .state('news', {
            url: '/news',
           templateUrl: 'news/views/views.html',
           controller:  'NewsController'
            
        })
        .state('news_new', {
            url: '/news_new',
           templateUrl: 'news/views/view_new.html',
           controller:  'NewsController'
            
        })

        .state('instrument', {
           url: '/instrument',
           templateUrl: 'instrument/views/views.html',
           controller:  'InstrumentController'
            
        })
        
        .state('/members', {
           url: '/members',
           templateUrl: 'members/views/views.html',
           controller:  'MembersController'
            
        })

        .state('members_form', {
            url: '/members/:id/members_form',
            templateUrl:'members/views/form.html',
            controller: 'MembersFormController'
        })


        .state('/credit', {
           url: '/credit',
           templateUrl: 'credit/views/views.html',
           controller:  'CreditController'
            
        })

        .state('/download', {
           url: '/download',
           templateUrl: 'download/views/views.html',
           controller:  'DownloadController'
            
        })

        ;


        
});