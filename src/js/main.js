angular
  .module('angularAddresses', ['ngRoute'])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'Main',
        controllerAs: 'main'
      })
      .otherwise({
        templateUrl: 'views/404.html'
      });
  })

  .filter('objToArr', function () {
    return function (obj) {
      if (obj) {
        return Object
        .keys(obj)
        .map(function (key) {
          obj[key]['_id'] = key; //this is the entire token//
        return obj[key];
          });
      }
    }
  })

  .filter('ransomcase', function () {
    return function (string) {
      return string
        .split('')
        .map(function (char, i) {
          return i % 2 ? char.toUpperCase() : char.toLowerCase();
        })
        .join('');
    }
  })

  .controller('Main', function ($http) {
    var vm = this;

    $http
      .get('https://viewangularapp.firebaseio.com/people.json')
      .success(function (data) {
        vm.people = data;
      });

    vm.newPerson = {};

    vm.addNewAddress = function () {
      $http
        .post('https://viewangularapp.firebaseio.com/people.json', vm.newPerson)
        .success(function (res) {
          vm.people[res.name] = vm.newPerson;
          vm.newPerson = {};
          $('#modal').modal('hide');
        });
    };

    vm.removeAddress = function (key) {
      console.log(key, "yo")
      $http
        .delete(`https://viewangularapp.firebaseio.com/people/${key}.json`)
        .success(function () {
          delete vm.people[key];
        })

    };

  });
