dictApp
.controller('wordSearch',function($timeout,$scope,$location){
      $scope.word = '';
      $scope.showWordDef = false;

      $scope.getDefinition = function() {
        $scope.showWordDef = true;
      };
});
