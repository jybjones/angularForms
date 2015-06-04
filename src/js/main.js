angular
  .module('angularAddresses', [])

  .filter('objToArr', function () {
    return function (obj) {
      if (obj) {
        return Object
        .keys(obj)
        .map(function (key) {
          obj[key]['_id'] = key;
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
        .success(function () {
          vm.people.push(vm.newPerson);
          vm.newPerson = {};
          $('#modal').modal('hide');
        });
    };

    vm.removeAddress = function (id) {
      $http
        .delete(`https://viewangularapp.firebaseio.com/people/${id}.json`)
        .success(function () {
          delete vm.people[id]
        });
    };

  });
