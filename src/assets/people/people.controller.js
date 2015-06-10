angular
  .module('angularForms')
  .controller('PeopleCtrl', function ($rootScope, $location, Person, Auth) {
    var vm = this;

    // if (!$rootScope.auth) {
    //   $location.path('/login');
    // }

    Person.getAll(function (people) {
      vm.people = people;
    });

    vm.onModalLoad = function () {};
  });
