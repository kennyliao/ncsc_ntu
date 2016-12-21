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

        .state('home_en', {

            url: '/home_en',
            templateUrl: 'home/views/views_en.html',
            controller:  'HomeController'
        })

       
        .state('about', {
            url: '/about',
           templateUrl: 'about/views/views.html',
           controller:  'AboutController'
            
        })
        .state('about_en', {
            url: '/about_en',
           templateUrl: 'about/views/views_en.html',
           controller:  'AboutController'
            
        })

        .state('news', {
            url: '/news',
           templateUrl: 'news/views/views.html',
           controller:  'NewsController'
            
        })
        .state('news_en', {
            url: '/news_en',
           templateUrl: 'news/views/views_en.html',
           controller:  'NewsController'
            
        })
        .state('news_new', {
            url: '/news_new',
           templateUrl: 'news/views/view_new.html',
           controller:  'NewsController'
            
        })
        .state('news_form', {
            url: '/news/:id/news_form',
            templateUrl:'news/views/form.html',
            controller: 'NewsFormController'
        })
        .state('news_form_en', {
            url: '/news/:id/news_form_en',
            templateUrl:'news/views/form_en.html',
            controller: 'NewsFormController'
        })


        .state('instrument', {
           url: '/instrument',
           templateUrl: 'instrument/views/views.html',
           controller:  'InstrumentController'
            
        })
        .state('instrument_en', {
           url: '/instrument_en',
           templateUrl: 'instrument/views/views_en.html',
           controller:  'InstrumentController'
            
        })
        
        .state('/members', {
           url: '/members',
           templateUrl: 'members/views/views.html',
           controller:  'MembersController'
            
        })
        .state('/members_en', {
           url: '/members_en',
           templateUrl: 'members/views/views_en.html',
           controller:  'MembersController'
            
        })
        .state('members_form', {
            url: '/members/:id/members_form',
            templateUrl:'members/views/form.html',
            controller: 'MembersFormController'
        })
        .state('members_form_en', {
            url: '/members/:id/members_form_en',
            templateUrl:'members/views/form_en.html',
            controller: 'MembersFormController'
        })

        .state('/credit', {
           url: '/credit',
           templateUrl: 'credit/views/views.html',
           controller:  'CreditController'
            
        })
        .state('/credit_en', {
           url: '/credit_en',
           templateUrl: 'credit/views/views_en.html',
           controller:  'CreditController'
            
        })
        .state('/links', {
           url: '/links',
           templateUrl: 'links/views/views.html',
           controller:  'DownloadController'
            
        })
        .state('/links_en', {
           url: '/links_en',
           templateUrl: 'links/views/views_en.html',
           controller:  'DownloadController'
            
        })

        ;


        
});