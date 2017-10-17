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
        // resolve : {
        //   employees       : employees
        //
        // },
        controllerAs: 'main'
      });

    // function employees(EmployeesListService){
    //   return EmployeesListService.LoadEmployees();
    // }
    $urlRouterProvider.otherwise('/');
  }

})();
