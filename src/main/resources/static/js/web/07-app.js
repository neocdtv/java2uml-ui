var app = angular.module('app', ['ngTouch', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('diagrams', {
                url: '/diagrams/:selectedPackage',
                controller: 'diagramsController'
            })
            .state('default', {
                url: '',
                redirectTo: 'diagrams'
            })
    }])
    .controller('diagramsController', ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state) {
        //conssole($stateParams['selectedPackage']);
        $scope.selectedPackage;
        $scope.packages = [];
        $http(
            {
                method: "GET",
                url: "output/packages.json"
            }).then(function (response) {
            $scope.packages = response.data;
        });

        $scope.$watch('selectedPackage', function () {
            console.log("selectedPackage: " + $scope.selectedPackage);
            $http(
                {
                    method: "GET",
                        url: $scope.selectedPackage
                }).then(function (response) {
                renderGraph(response.data);
            });
        });

        function renderGraph(dot) {
            var viz = new Viz();
            console.log(dot)
            viz.renderSVGElement(dot)
                .then(function(element) {
                    document.getElementById("renderTarget").innerHTML = "";
                    document.getElementById("renderTarget").appendChild(element);
                })
                .catch(function(error){
                    // Create a new Viz instance (@see Caveats page for more info)
                    // Possibly display the error
                    console.error(error);
                });
        }
    }]);