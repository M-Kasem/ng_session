var metaInfos = angular.module('metaInfos', []);

metaInfos.controller('UserCtrl', ['$scope', function($scope){
    $scope.names = ['Mohamed', 'Kareem', 'Ahmed'];
    $scope.name = 'Anonymous';
    $scope.addName = function(name){
        $scope.names.push(name);
    }
}]);