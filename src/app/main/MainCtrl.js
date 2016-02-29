(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainCtrl', MainCtrl);

  /** @ngInject */
  function MainCtrl($scope, $state) {

    $scope.enterApp=function (){
      $state.go('check-in');
    };

  }

})();
