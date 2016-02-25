(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope) {
      this.online = true;
      $scope.description = 'Angular Seed Application';
  }

})();
