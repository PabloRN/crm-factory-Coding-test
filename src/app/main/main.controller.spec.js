(function() {
  'use strict';

  describe('Unit test AppController: mdDialog', function () {
    var ctrl, mdDialog, vm;

    beforeEach(function () {
      module('employeeList');
      inject(function ($rootScope, $controller, $mdDialog) {
        vm = $rootScope.$new();
        mdDialog = $mdDialog; //keep the reference, for later testing.

        spyOn(mdDialog, 'show');
        mdDialog.show.and.callFake(function () {
          return {
            then: function (callBack) {
              callBack(true); //return the value to be assigned.
            }
          }
        });

        ctrl = $controller('MainController',{$scope:vm, $mdDialog:mdDialog}); //Inject the dependency

      });
    });

    it(': Opened', function () {
      vm.showAlert(); //exercise the method.
      vm.$digest();

      expect(mdDialog.show).toHaveBeenCalled();
      expect(vm.status).toBe(true);
    });
  });
})();
