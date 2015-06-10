angular
  .module('angularForms')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'main',
        private: true
      })
      .when('/people/new', {
        templateUrl: 'views/people.html',
        controller: 'NewPersonCtrl',
        controllerAs: 'main',
        private: true
      })
      .when('/people/:id', {
        templateUrl: 'views/person.html',
        controller: 'PersonController',
        controllerAs: 'main',
        private: true
      })
      .when('/people/:id/edit', {
        templateUrl: 'views/person.html',
        controller: 'EditPersonCtrl',
        controllerAs: 'main',
        private: true
      });
  });
