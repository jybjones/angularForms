angular
  .module('angularForms')
  // .controller('LoginCtrl', function ($rootScope, $scope, $location, API_URL) {
  //   var vm = this;

  //   vm.login = function () {
  //     var fb = new Firebase(API_URL);

  //     fb.authWithPassword({
  //       email: vm.email,
  //       password: vm.password
  //     }, function (err, authData) {
  //       if (err) {
  //         console.log('Error', err)
  //       } else {
  //         $rootScope.auth = authData;
  //         $location.path('/people');
  //         $scope.$apply();
  //       }

  //     });

  //   };
  //   vm.register = function () {};
  // })
  .controller('LoginCtrl', function ($scope, $location, Auth) {
    var vm = this;
    var ref = new  Firebase(API_URL);
    var Auth = firebaseAuth(ref);

    vm.login = function () {
      Auth.login(vm.auth.email, vm.auth.password, function (Person) {
        $location.path('/people');
        $scope.$apply();
      });
    };

    vm.register = function () {
      $location.path('/people');
    };
  });
