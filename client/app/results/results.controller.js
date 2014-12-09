'use strict';

angular
  .module('app.results', [])
  .controller('Results', Results);

Results.$inject = ['$scope', 'search', '$state'];

function Results ($scope, search, $state) {

  $scope.answer = search.getAnswer();
  $scope.message = '';
  // function stateRedirect () {
  //   $state.go('result');
  // }

  // $scope.test = stateRedirect;

  //$scope.info.url, $scope.info.cover;
  $scope.displayInfo = displayInfo;

  function displayInfo () {
  	 var infoObj = search.getInfo();
  	 $scope.url = infoObj.url;
  	 $scope.cover = infoObj.cover;
  	 $scope.message = 'View source';
  }
}
