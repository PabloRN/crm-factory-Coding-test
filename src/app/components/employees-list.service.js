(function () {
  'use strict';

  angular
    .module('employeeList')
    .factory('EmployeesListService', EmployeesListService);

  /* @ngInject */
  function EmployeesListService ($http) {

    var service = {};
    /* function returns a promise with the data got from employeeList.json */
    service.getEmployees = function () {
      return $http.get('app/main/employeeList.json');
    };
    return service;
  }
})();
