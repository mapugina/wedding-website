'use strict';

/**
 * @ngdoc overview
 * @name untitledApp
 * @description
 * # untitledApp
 *
 * Main module of the application.
 */
angular
  .module('untitledApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/story', {
        templateUrl: 'views/story.html'
      })
      .when('/purposal', {
        templateUrl: 'views/purposal.html'
      })
      .when('/date', {
        templateUrl: 'views/date.html'
      })
      .when('/registries', {
        templateUrl: 'views/registries.html'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
