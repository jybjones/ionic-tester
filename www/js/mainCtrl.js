(function(){
  'use strict';

  angular.module('starter')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
   $scope.words = ['amazing', 'innovatove', 'revolutionary', 'colorful', 'rockin'];
   $scope.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
      $interval(function(){
        $scope.mean = _.shuffle($scope.words);
        $scope.color = _.shuffle($scope.colors);
      }, 500);


  }]);
})();