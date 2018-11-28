mdsoft.directive('ngContact', function() {
    var controller = ['$scope', function($scope) {
        $scope.contactTitle = "<h2>Leave us a message</h2><h4>We will contact you as soon as possible.</h4>";
        $scope.submitForm = function(isValid) {
            console.log("aaaaaa", $scope);

            // check to make sure the form is completely valid
            if (isValid) {
                console.log('our form is amazing');
            }

        };
        $scope.master = {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();

    }]
    return {
        restrict: 'E', //Default in 1.3+
        transclude: true,
        controller: controller,
        templateUrl: 'partials/contact.html'
    }
});
mdsoft.directive('ngOffshoring', function() {
    
    return {
        restrict: 'E', //Default in 1.3+
        templateUrl: 'partials/offshoring.html'
    }
});
mdsoft.directive("navDirective", function() {
    var controller = ['$scope', '$location', function($scope, $location) {
            $scope.items = [
                { path: 'aboutUs', title: 'About us' },
                { path: 'services', title: 'Services' },
                { path: 'portfolio', title: 'Portfolio' },
                { path: '/job/:id', title: 'Careers' },
                { path: '/offshoring', title: 'Offshoring' },
                { path: 'contact', title: 'Contact' }
            ];
            $scope.isActive = function(item) {
                if (item.path == $location.path()) {
                    return true;
                }
                return false;
            };

        }],
        template = '<li ng-repeat="item in items" ng-class="{active: isActive(item)}"><a du-smooth-scroll du-scrollspy href="#{{item.path}}">{{item.title}}</a></li>';
    return {
        restrict: 'E',
        scope: {

        },
        controller: controller,
        template: template
    };

});
//-------------------------------footer----------------------
mdsoft.directive("footerDirective", function() {
    var controller = ['$scope', function($scope) {
            $scope.footerData = [{
                title: "Don’t be shy let’s get <span>social</span>",
                text: "<p>11, rue Abderrahman Azzam, App. A-34 Complexe Kheireddine Pacha,<br /> Montplaisir, Tunis - 1002 - Tunisie<br /> © 2015 Mdsoft INT</p>"
            }];

        }],
        template = '<div class="social" ng-repeat="footerT in footerData"><h3 ng-bind-html="footerT.title"></h3><a href="" title="linkedIn"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a><a href="" title="Facebook"><i class="fa fa-facebook-square" aria-hidden="true"></i></a><a href="" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a><a href="" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a><div class="contact-adress" ng-bind-html="footerT.text"></div>';

    return {
        restrict: 'E',
        controller: controller,
        template: template
    }

});
