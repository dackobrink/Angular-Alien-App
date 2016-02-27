(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckinCtrl', CheckinCtrl);

  // placeholder
  function CheckinCtrl($scope, $http, $rootScope, $state, $cookies)  {
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    $scope.colonist = {};
    var COLONIST_POST_URL =  'https://red-wdp-api.herokuapp.com/api/mars/colonists';

    $scope.colonist ={};

// fetch all jobs
    $http({
      method: 'Get',
      url: JOBS_GET_URL
    }).then(function(response){
        $scope.jobs = response.data.jobs;
    }, function(error){
        console.log(error);
});

$scope.showValidation = false;
$scope.login = function (event){
  event.preventDefault();
  if($scope.checkInForm.$invalid){
    $scope.showValidation=true;
  } else {
  $http({
    method: 'POST',
    url: COLONIST_POST_URL,
    data: {  'colonist' : $scope.colonist}
  })
  .then(function(response){
    console.log(response);
    $cookies.putObject('colonist-info', response.data.colonist);
    $rootScope.colonist_id = response.data.colonist.id;
    console.log($rootScope.colonist_id);
      $state.go('encounters') ;
},  function(error){
      console.log(error);
    });
  }
};

  }
}
)();
