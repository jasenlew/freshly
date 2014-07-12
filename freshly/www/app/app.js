// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('freshly', ['ionic', 'freshly.activities', 'freshly.map', 'freshly.capture'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('test', {
      url: "/test",
      templateUrl: 'templates/tab-activities.html'
    })

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.explore', {
      url: '/explore',
      views: {
        'tab-explore': {
          templateUrl: 'templates/tab-explore.html',
          controller: 'ExploreController'
        }
      }
    })

    .state('tab.capture', {
      url: '/capture',
      views: {
        'tab-capture': {
          templateUrl: 'templates/tab-capture.html',
          controller: 'CaptureController'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/explore');

});
