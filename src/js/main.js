var angularForms = angular.module("angularForms", []);

angularForms.controller('AddressBookController', function () {
  var vm = this;

  vm.people = [
      {firstName:"Abe", lastName: "Abel", number: "111-111-1111", twitter: "@abe"},
      {firstName:"Busy", lastName: "Body", number: "222-222-2222", twitter: "@busy"},
      {firstName:"Candy", lastName: "Crush", number: "333-333-3333", twitter: "@candy"}
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

// $scope.addContact = function() {
//     if($scope.firstName && $scope.lastName && $scope.number && $scope.twitter)
//     {
//       $scope.contacts.push({firstName:$scope.firstName, lastName:$scope.lastName, number:$scope.number, twitter:$scope.twitter})
//       $scope.firstName ='';
//       $scope.lastName ='';
//       $scope.number = '';
//       $scope.twitter ='';
//     }
// };



