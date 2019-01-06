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
    .controller('diagramsController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
        alert('works');
    }]);