(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckinCtrl', CheckinCtrl);

  // placeholder
  function CheckinCtrl($scope, $http, $state)  {
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    $scope.colonist = {};
    var COLONIST_POST_URL =
    'https://red-wdp-api.herokuapp.com/api/mars/colonists';

// fetch all jobs
    $http({
      method: 'Get',
      url: JOBS_GET_URL
    }).then(function(response){
        $scope.jobs = response.data.jobs;
        console.log(response);
    }, function(error){
        console.log(error);
});

$scope.login = function (event){
  event.preventDefault();

  $http({
    method: 'POST',
    url: COLONIST_POST_URL,
    data: {
      'colonist' : $scope.colonist
    }
  }).then(function(response){
      $state.go('encounters') ;
},  function(error){
      console.log(error);
});
};
}
})();
