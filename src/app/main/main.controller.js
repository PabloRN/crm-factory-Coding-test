(function () {
  'use strict';

  angular
    .module('employeeList')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController (employees, $mdDialog) {
    var vm        = this;
    vm.detailFlag = [];

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

    function showDetails (id) {
      initFlags();
      if (vm.detailFlag[id] == true) {
        vm.detailFlag[id] = false;
      }
      else {
        vm.detailFlag[id] = true;
      }
    }

    function initFlags () {
      angular.forEach(vm.employees, function (item) {
        vm.detailFlag[item.id] = false;
      });
    }

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
    };
  }
})();
