angular.module('zypApp', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
            .state('campaigns', {
                url: '/campaigns/:id'
            })
        $urlRouterProvider
            .otherwise('/home');
    }])
    .controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
        // $scope.loadEmcee = function(id) {
        //     $state.go('emcees', {
        //         id: id
        //     });
        // }
    }]);
