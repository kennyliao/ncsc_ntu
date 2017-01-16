app.config(function($stateProvider, $urlRouterProvider,$locationProvider,$httpProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        

        .state('home', {
            url: '/home',
            templateUrl: 'home/views/views.html',
            controller:  'HomeController'
        })

        .state('home/', {
            url: '/home/',
           templateUrl: 'home/views/views.html',
           controller:  'HomeController'
            
        })


        .state('home_en', {

            url: '/home_en',
            templateUrl: 'home/views/views_en.html',
            controller:  'HomeController_EN'
        })
        
       
        .state('about', {
            url: '/about',
           templateUrl: 'about/views/views.html',
           controller:  'AboutController'
            
        })

        .state('about/', {
            url: '/about/',
           templateUrl: 'about/views/views.html',
           controller:  'AboutController'
            
        })

        .state('about_form', {
           url: '/about/about_form/:id',
           templateUrl: 'about/views/form.html',
           controller:  'AboutFormController'
            
        })

        .state('about_form_en', {
           url: '/about/about_form_en/:id',
           templateUrl: 'about/views/form_en.html',
           controller:  'AboutFormController_EN'
            
        })

        .state('about_en', {
            url: '/about_en',
           templateUrl: 'about/views/views_en.html',
           controller:  'AboutController_EN'
            
        })

        
        .state('news', {
            url: '/news',
           templateUrl: 'news/views/views.html',
           controller:  'NewsController'
            
        })

        .state('news/', {
            url: '/news/',
           templateUrl: 'news/views/views.html',
           controller:  'NewsController'
            
        })

        .state('news_en', {
            url: '/news_en',
           templateUrl: 'news/views/views_en.html',
           controller:  'NewsController_EN'
            
        })


        .state('news_new', {
            url: '/news_new',
           templateUrl: 'news/views/view_new.html',
           controller:  'NewsController'
            
        })
        .state('news_more', {
            url: '/news/news_more/:id',
            templateUrl:'news/views/more.html',
            controller: 'NewsMoreController'
        })
        .state('news_en_more', {
            url: '/news/news_en_more/:id',
           templateUrl: 'news/views/more_en.html',
           controller:  'NewsMoreController'
            
        })
        .state('news_form', {
            url: '/news/news_form/:id',
            templateUrl:'news/views/form.html',
            controller: 'NewsFormController'
        })
        .state('news_form_en', {
            url: '/news/news_form_en/:id',
            templateUrl:'news/views/form_en.html',
            controller: 'NewsFormController'
        })


        .state('instrument', {
           url: '/instrument',
           templateUrl: 'instrument/views/views.html',
           controller:  'InstrumentController'
            
        })

        .state('instrument/', {
            url: '/instrument/',
           templateUrl: 'instrument/views/views.html',
           controller:  'InstrumentController'
            
        })

        .state('instrument_en', {
           url: '/instrument_en',
           templateUrl: 'instrument/views/views_en.html',
           controller:  'InstrumentController_EN'
            
        })
        
        .state('/members', {
           url: '/members',
           templateUrl: 'members/views/views.html',
           controller:  'MembersController'
            
        })

        .state('members/', {
            url: '/members/',
           templateUrl: 'members/views/views.html',
           controller:  'MembersController'
            
        })

        .state('/members_en', {
           url: '/members_en',
           templateUrl: 'members/views/views_en.html',
           controller:  'MembersController_EN'
            
        })
        .state('members_form', {
            url: '/members/members_form/:id',
            templateUrl:'members/views/form.html',
            controller: 'MembersFormController'
        })
        .state('members_form_en', {
            url: '/members/members_form_en/:id',
            templateUrl:'members/views/form_en.html',
            controller: 'MembersFormController'
        })

        .state('/credit', {
           url: '/credit',
           templateUrl: 'credit/views/views.html',
           controller:  'CreditController'
            
        })

        .state('credit/', {
            url: '/credit/',
           templateUrl: 'credit/views/views.html',
           controller:  'CreditController'
            
        })

        .state('/credit_en', {
           url: '/credit_en',
           templateUrl: 'credit/views/views_en.html',
           controller:  'CreditController_EN'
            
        })

        .state('/links', {
           url: '/links',
           templateUrl: 'links/views/views.html',
           controller:  'DownloadController'
            
        })

        .state('links/', {
            url: '/links/',
           templateUrl: 'links/views/views.html',
           controller:  'DownloadController'
            
        })
        
        .state('/links_en', {
           url: '/links_en',
           templateUrl: 'links/views/views_en.html',
           controller:  'DownloadController_EN'
            
        })

        ;

        $locationProvider.html5Mode(true);

        
});