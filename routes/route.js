mdsoft.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider

        .state("app", {
            url: "/",
            templateUrl: "partials/home.html",
            controller: 'homeCtrl'
        })
        .state("offshoring", {
            url: "/offshoring",
            templateUrl: "partials/offshoring.html",
            controller: 'offshoringCtrl'
        })
        .state("job", {
            url: "/job/:id",
            params: {'id': null},
            templateUrl: "partials/job.html",
            controller: 'jobCtrl'
        })
        .state("recrutement", {
            url: "/recrutement",
            templateUrl: "partials/recrutement.html",
            controller: 'recrutementCtrl'
        });
        $urlRouterProvider.otherwise("/");
});
