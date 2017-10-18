(function () {
  'use strict';

  angular
    .module('employeeList')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController (employees, $mdDialog) {
    var vm        = this;
    vm.detailFlag = [];
    /* populating vm.employees with data got from the resolve employees at index.route.js injected */
    if (employees) {
      vm.employees = employees;
    }

    vm.showDetails = showDetails;
    vm.initFlags   = initFlags;
    vm.showAlert   = showAlert;

    activate();

    function activate () {
      initFlags()
    }
/* function to expands/collapse the items bio details */
    function showDetails (id) {
      initFlags();
      if (vm.detailFlag[id] == true) {
        vm.detailFlag[id] = false;
      }
      else {
        vm.detailFlag[id] = true;
      }
    }
    /* function to init flags to determinate if items bio details is expanded or collapsed */
    function initFlags () {
      angular.forEach(vm.employees, function (item) {
        vm.detailFlag[item.id] = false;
      });
    }
    /* function to shows alert when we click on items bio details */
    function showAlert(ev, item) {
      $mdDialog.show(
        $mdDialog.alert()
                 .parent(angular.element(document.querySelector('#popupContainer')))
                 .clickOutsideToClose(true)
                 .title('You have clicked on '+ item.name + ' details')
                 .textContent('Age: ' + item.age + 'years, Gender: ' + item.gender + ', Status: ' + item.status + ', Profession: ' + item.profession)
                 .ariaLabel('Alert Dialog Demo')
                 .ok('Got it!')
                 .targetEvent(ev)
      );
    }
  }
})();
