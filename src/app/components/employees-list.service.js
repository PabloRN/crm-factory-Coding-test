(function () {
  'use strict';

  angular
    .module('employeeList')
    .factory('EmployeesListService', EmployeesListService);

  /* @ngInject */
  function EmployeesListService ($http) {

    var service = {};

    service.getEmployees = function () {
      return $http.get('app/main/employeeList.json');
    };
    return service;

    // return {
    //   getEmployees: function () {
    //     $http.get('app/main/employeeList.json'); // this will return a promise to controller
    //   }
    // }
  }
})();
