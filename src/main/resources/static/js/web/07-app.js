var app = angular.module('app', ['ngTouch', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('diagrams', {
                url: '/diagrams',
                controller: 'diagramsController',
                templateUrl: 'templates/diagrams.html'
            })
            .state('default', {
                url: '',
                redirectTo: 'diagrams'
            })
    }])
    .controller('diagramSelectionController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
        // get package from url query param
        // retrieve pacakge.json
        $scope.selectedPackage = {};
        $scope.packages = [];
        $http(
            {
                method: "GET",
                url: "output/packages.json"
            }).then(function (response) {
            $scope.packages = response.data;
        });
    }])
    .controller('diagramsController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
        // get package from url query param

    }]);