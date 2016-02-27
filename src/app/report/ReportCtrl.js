(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $rootScope, $filter, $cookies, $state, $http) {
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

      // this.online = true;

    $scope.encounter = {
      colonist_id: $cookies.getObject('colonist-info').id,
      date: $filter('date')(Date.now(), 'yyyy-MM-dd')
    };

    $http({
      method: 'GET',
      url: ALIENS_GET_URL

    }).then(function(response){
      $scope.aliens = response.data.aliens;
    }, function (error){
    });

    $scope.submitReports = function(event){
        event.preventDefault();


        $http({
          method: 'POST',
          url: REPORT_POST_URL,
          data: {'encounter': $scope.encounter}

        }).then(function(response){
          $state.go('encounters');

          console.log(response);
        }, function(error){
          console.log(error);
        });
    };
  }

})();
