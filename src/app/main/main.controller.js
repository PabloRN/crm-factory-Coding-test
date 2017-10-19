(function () {
  'use strict';

  angular
    .module('employeeList')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController (employees, $mdDialog) {
    var vm        = this;
    vm.showDetail = null;

    vm.showDetails = showDetails;
    vm.showAlert   = showAlert;

    activate();

    function activate () {
      /* populating vm.employees with data got from the resolve employees at index.route.js injected */
      if (employees) {
        vm.employees = employees;
      }
    }

    /* function to expands/collapse the items bio details */
    function showDetails (id) {

      if (vm.showDetail === id) {
        vm.showDetail = null;
      }
      else {
        vm.showDetail = id;
      }
    }

    /* function to shows alert when we click on items bio details */
    function showAlert (ev, item) {
      $mdDialog.show(
        $mdDialog.alert()
                 .title('You have clicked on ' + item.name + ' details')
                 .clickOutsideToClose(true)
                 .textContent('Age: ' + item.age + 'years, Gender: ' + item.gender + ', Status: ' + item.status + ', Profession: ' + item.profession)
                 .ok('Got it!')
                 .targetEvent(ev))
    }
  }
})();
