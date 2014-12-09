'use strict';

angular
   .module('app.search', [])
   .controller('Search', Search);

Search.$inject = ['$scope', 'search'];

function Search ($scope, search) {
   //fetching artist list
   search.getSource(function(artists){
     $scope.artists = artists;
   });
}
