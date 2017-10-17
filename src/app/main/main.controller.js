(function () {
  'use strict';

  angular
    .module('employeeList')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController (EmployeesListService, employees) {
    var vm        = this;
    vm.detailFlag = [];

    if (employees) {
      vm.employees = employees;

    }
    vm.showDetails  = showDetails;
    vm.getEmployees = getEmployees;
    vm.initFlags    = initFlags;

    activate();
    function getEmployees () {
      EmployeesListService.getEmployees()
                          .then(function (response) {
                            vm.employees = response.data.employees;

                          }, function (error) {
                            $scope.status = 'Unable to load employees data: ' + error.message;
                          });
    }

    function activate () {
      getEmployees();
      initFlags()
    }

    function showDetails (id) {
      if (vm.detailFlag[id] == true) {
        vm.detailFlag[id] = false;
      }
      else {
        vm.detailFlag[id] = true;
      }
    }

    function initFlags () {
      angular.forEach(vm.employees, function (item) {
        showDetails(item.id);
      });
    }
  }
})();
