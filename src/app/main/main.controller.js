(function () {
  'use strict';

  angular
    .module('employeeList')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController (EmployeesListService) {
    var vm = this;
    // vm.getEmployees = getEmployees;

    activate();
    // function getEmployees () {
    //   EmployeesListService.service()
    //                       .then(function (response) {
    //                         vm.employees = response;
    //                         console.log('githubContributor', vm.employees)
    //                       }, function (error) {
    //                         $scope.status = 'Unable to load customer data: ' + error.message;
    //                       });
    // }
    EmployeesListService.getEmployees().then(function (response) {
      vm.employees = response.data.employees;
      console.log(vm.employees);

    });


    function activate () {


      // vm.employees      = EmployeesListService.GetData();
      // console.log('githubContributor', vm.employees)
    }
  }
})();
