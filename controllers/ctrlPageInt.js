mdsoft.controller('offshoringCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.$on('$viewContentLoaded', function() {
        $window.scrollTo(0, 0);
    });
    $scope.pageTitle = "<h2>Offshorring</h2><h4>Our team is smart. Our processes are agile. You’re in the tight place.</h4>";
    $scope.title = "OFFSHORING";
    $scope.offshoringMobile = [{
        img: "offshoring-mobile.png",
        text: '<h2>Mobile Developement</h2><p>Native mobile apps development : Android, iOS and Windows Phone.</p><br /><p>Our mobile solutions are designed to efficiently fulfill business requirements and offer an optimal user experience for each device and platform.</p><ul><li><span class="ic1"></span>iOS</li><li><span class="ic2"></span>Android</li><li><span class="ic3"></span>Windows Phone</li></ul>'
    }]
    $scope.offshoringWeb = [{
        img: "offshoring-web.png",
        text: '<h2>Web Developement</h2><p>MdSoft develops fully dynamic websites and portals using the most relevant and cutting edge technologies :</p><br /><p>We rely on web development best practices and provide our partners with customized and high quality designed supports for an optimized user experience.</p><br /><p>With an extensive experience in publishing and copywriting, we create relevant and meaningful web content that engages readers and call them to action.</p><ul><li><span class="ic4"></span>Magento 2</li><li><span class="ic5"></span>Drupal</li><li><span class="ic6"></span>Symphony 3.0</li></ul>'
    }]

}]);

mdsoft.controller('jobCtrl', ['$scope', '$routeParams', '$window', '$location', '$state', '$stateParams', function($scope, $routeParams, $window, $location, $state, $stateParams) {
    console.log();
    $scope.$on('$viewContentLoaded', function() {
        $window.scrollTo(0, 0);
    });

    $scope.pageTitle = "<h2>Careers</h2><h4>At Mdsoft, we always keep a place open for new talent.</h4>";

    $scope.jobs = [{
        id: "4",
        title: "Ingénieurs Développement Android/iOS",
        textSection: [{
            title: "Responsabilités :",
            text: "<ul><li>Participation à l'élaboration et à la maintenance des applications (Android/iOS).</li><li>Assurer la bonne qualité du produit et l’application des bonnes pratiques lors du développement.</li><li>Mener à bien les tests (unitaires, montée en charge, non-régression) et les recettes</li><li>Assurer un suivi des développements et mener les actions d'optimisation et de maintenance corrective et évolutive.</li></ul>"
        }, {
            title: "Profil recherché :",
            text: "<ul><li>Diplômé(e) d'une école d’ingénieur (ENSI / FST / ENIT/ ..)</li><li>Maitrisede la langue française</li><li>Bonne maitrise de l’environnement de développement et des gestionnaires de versions.</li><li>Doté d’un excellent relationnel, créatif, organisé, ponctuel</li><li>Doté d’un bon relationnel, créatif, organisé, ponctuel</li><li>Doté d'une sensibilité graphique (UI et UX) pouvant participer aux choix de l'ergonomie des fonctionnalités à implémenter.</li><li>Doté du sens d’innovation, d’optimisation et d’amélioration continue</li></ul>"
        }, {
            title: "Expérience  :",
            text: "<p>Entre 0 et 2 ans</p>"
        }]
    }, {
        id: "5",
        title: "Ingénieurs Développement PHP/Symfony",
        textSection: [{
            title: "Responsabilités :",
            text: "<ul><li>Participation à l'élaboration et à la maintenance des applications (Android/iOS).</li><li>Assurer la bonne qualité du produit et l’application des bonnes pratiques lors du développement.</li><li>Mener à bien les tests (unitaires, montée en charge, non-régression) et les recettes</li><li>Assurer un suivi des développements et mener les actions d'optimisation et de maintenance corrective et évolutive.</li></ul>"
        }, {
            title: "Profil recherché :",
            text: "<ul><li>Diplômé(e) d'une école d’ingénieur (ENSI / FST / ENIT/ ..)</li><li>Maitrisede la langue française</li><li>Bonne maitrise de l’environnement de développement et des gestionnaires de versions.</li><li>Doté d’un excellent relationnel, créatif, organisé, ponctuel</li><li>Doté d’un bon relationnel, créatif, organisé, ponctuel</li><li>Doté d'une sensibilité graphique (UI et UX) pouvant participer aux choix de l'ergonomie des fonctionnalités à implémenter.</li><li>Doté du sens d’innovation, d’optimisation et d’amélioration continue</li></ul>"
        }]
    }, {
        id: "6",
        title: "Ingénieurs Développement PHP",
        textSection: [{
            title: "Responsabilités :",
            text: "<ul><li>Participation à l'élaboration et à la maintenance des applications (Android/iOS).</li><li>Assurer la bonne qualité du produit et l’application des bonnes pratiques lors du développement.</li><li>Mener à bien les tests (unitaires, montée en charge, non-régression) et les recettes</li><li>Assurer un suivi des développements et mener les actions d'optimisation et de maintenance corrective et évolutive.</li></ul>"
        }, {
            title: "Profil recherché :",
            text: "<ul><li>Diplômé(e) d'une école d’ingénieur (ENSI / FST / ENIT/ ..)</li><li>Maitrisede la langue française</li><li>Bonne maitrise de l’environnement de développement et des gestionnaires de versions.</li><li>Doté d’un excellent relationnel, créatif, organisé, ponctuel</li><li>Doté d’un bon relationnel, créatif, organisé, ponctuel</li><li>Doté d'une sensibilité graphique (UI et UX) pouvant participer aux choix de l'ergonomie des fonctionnalités à implémenter.</li><li>Doté du sens d’innovation, d’optimisation et d’amélioration continue</li></ul>"
        }]
    }, {
        id: "7",
        title: "testtt",
        textSection: [{
            title: "Responsabilités :",
            text: "<ul><li>Participation à l'élaboration et à la maintenance des applications (Android/iOS).</li><li>Assurer la bonne qualité du produit et l’application des bonnes pratiques lors du développement.</li><li>Mener à bien les tests (unitaires, montée en charge, non-régression) et les recettes</li><li>Assurer un suivi des développements et mener les actions d'optimisation et de maintenance corrective et évolutive.</li></ul>"
        }, {
            title: "Profil recherché :",
            text: "<ul><li>Diplômé(e) d'une école d’ingénieur (ENSI / FST / ENIT/ ..)</li><li>Maitrisede la langue française</li><li>Bonne maitrise de l’environnement de développement et des gestionnaires de versions.</li><li>Doté d’un excellent relationnel, créatif, organisé, ponctuel</li><li>Doté d’un bon relationnel, créatif, organisé, ponctuel</li><li>Doté d'une sensibilité graphique (UI et UX) pouvant participer aux choix de l'ergonomie des fonctionnalités à implémenter.</li><li>Doté du sens d’innovation, d’optimisation et d’amélioration continue</li></ul>"
        }]
    }];
    $scope.getActualPos = function() {
        for (var i = 0, arrayLength = $scope.jobs.length; i < arrayLength; i++) {
            if ($scope.jobs[i].id == $stateParams.id) {
                $scope.actualJob = $scope.jobs[i];
                $scope.actualPos = i;
            }
        }
        if ($stateParams.id == ':id') {
            $scope.actualJob = $scope.jobs[0];
            $state.go('job', { id: $scope.jobs[0].id }, { reload: true })
        }
    }
    $scope.getActualPos();

    var jobsL = $scope.jobs.length;
    $scope.nextStory = function() {
        $scope.getActualPos();
        if ($scope.actualPos == jobsL - 1) {
            return;
        }
        var storyID = parseInt($stateParams.id) + 1;

        $state.go('job', { id: storyID }, { reload: true })
    };

    $scope.previousStory = function() {
        $scope.getActualPos();
        if ($scope.actualPos == jobsL - jobsL) {
            return;
        }
        var storyID = parseInt($stateParams.id) - 1;

        $state.go('job', { id: storyID }, { reload: true })
    };
}]);


mdsoft.controller('recrutementCtrl', ['$scope', function($scope) {
    $scope.pageTitle = "<h2>Careers</h2><h4>At Mdsoft, we always keep a place open for new talent.</h4>";

    $scope.pageTitleDetail = "<h2>Formulaire</h2><h4>Merci de bien vouloir renseigner quelques informations.</h4>";
    $scope.detailContact = "<h4>Vous pouvez également nous contacter :<br /><br />Par téléphone :<br /><br /><span>+216 71 903 930<br />+216 71 901 525</span></h4>";
    $scope.thankYou = "<h1>Thank you</h1><p>Below we have highlighted some of our client experiences. !</p>";

    $(".thankyou").css("display", "none");
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            $(".thankyou").fadeIn();
            $scope.recrut = {}; // or new User() if it is your case
            $scope.recrutForm.$setPristine();
        }
    };




}])
