'use strict';

angular
  .module('app.results', [])
  .controller('Results', Results);

Results.$inject = ['$scope', 'search'];

function Results ($scope, search) {
  // var vm = this;
  // $scope.answer = search.answer;
  console.log('it runs');
  $scope.answer = search.getAnswer();
  console.log('$scope.answer', $scope.answer);
  $scope.message = '';
  //$scope.info.url, $scope.info.cover;
  $scope.displayInfo = displayInfo;

  function displayInfo () {
  	 var infoObj = search.getInfo();
  	 $scope.url = infoObj.url;
  	 $scope.cover = infoObj.cover;
  	 $scope.message = 'View source';
  }
}
