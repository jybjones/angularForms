angular
  .module('angularForms')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'js/auth/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth',
        resolve: {
          checkLogin: function ($rootScope, $location) {
            if ($rootScope.auth) {
              $location.path('/people')
            }
          }
        }
      })

      .when('/logout', {
        template: '<h1>Logging out...</h1>',
        controller: 'LogoutCtrl'
      });
  });
