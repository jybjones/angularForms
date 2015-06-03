angular
  .module('angularAddresses', [])

  .controller('Main', function () {
    var vm = this;

    vm.people = [
      {name: 'Ben', twitter: '@ben123', phone: '+1 615 234 5678'},
      {name: 'Dan', twitter: '@dandan', phone: '(615) 234-5678'},
      {name: 'Elsa', twitter: '@letitgo', phone: '615-234-5678'},
      {name: 'Amanda', twitter: '@princessamanda', phone: '1 615 234 5678'},
      {name: 'Charity', twitter: '@nonprofit', phone: '615.234.5678'}
    ];

    vm.newPerson = {};

    vm.addNewAddress = function () {
      vm.people.push(vm.newPerson);
      vm.newPerson = {};
    };

    vm.removeAddress = function (person) {
      var index = vm.people.indexOf(person);
      vm.people.splice(index, 1);
    };

  });
