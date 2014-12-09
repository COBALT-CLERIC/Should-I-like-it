'use strict';

angular
  .module('app', [
	 'ui.router',
   'app.angucomplete',
   'app.search',
   'app.services',
   'app.results'
	 ])
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/search/searchPage.html',
      controller: 'Search'
    })
    .state('result', {
      url: '/results',
      templateUrl: 'app/results/resultsPage.html',
      controller: 'Results'
    });
}
