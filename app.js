var metaInfos = angular.module('metaInfos', ['ngRoute']);

metaInfos.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/users', {
            templateUrl: 'users-list.html',
            controller: 'UsersCtrl'
        }).
        when('/user/:user_id', {
            templateUrl: 'user-detail.html',
            controller: 'UserDetailCtrl'
        }).
        otherwise({
            redirectTo: '/users'
        })
}]);

metaInfos.controller('UsersCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('file:///home/msamy/Dropbox/workspace/ng_session/data.json').success(function(data) {
      $scope.users = data;
    });
}]);

metaInfos.controller('UserDetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

    $http.get('file:///home/msamy/Dropbox/workspace/ng_session/user_details/'+$routeParams.user_id+'.json').success(function(data) {
      $scope.user = data;
    });
}]);