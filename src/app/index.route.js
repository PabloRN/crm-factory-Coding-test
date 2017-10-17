(function() {
  'use strict';

  angular
    .module('employeeList')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        resolve : {
          employees       : employees

        },
        controllerAs: 'vm'
      });

    function employees(EmployeesListService){
      var employees = EmployeesListService.getEmployees()
                          .then(function (response) {
                            return response.data.employees;

                          }, function (error) {
                            $scope.status = 'Unable to load employees data: ' + error.message;
                          });
      return employees
    }
    $urlRouterProvider.otherwise('/');
  }

})();
