angular
  .module('angularForms')
  // .run(function ($rootScope, $location, API_URL) {
  //   $rootScope.$on('$routeChangeStart', function (event, nextRoute) {
  //       var fb = new Firebase(API_URL);
  //       $rootScope.auth = fb.getAuth();

  //       if(nextRoute.$$route && nextRoute.$$route.private && !$rootScope.auth) {
  //       $location.path('/login')
  //       }

  //   });
  // })
  .run(function ($rootScope, Auth) {
    $rootScope.$on('$routeChangeStart', function (event, nextRoute) {
      if (nextRoute.$$route && nextRoute.$$route.private) {
        Auth.requireLogin();
      }
    });
  });
