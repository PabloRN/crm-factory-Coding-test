(function() {
  'use strict';

  describe('controllers', function(){
    var vm, mdDialog;
    var employees = ['some', 'mocked', 'products'];


    beforeEach(module('employeeList'));
    beforeEach(inject(function(_$controller_, _employees_, _$mdDialog_) {

          spyOn(_$mdDialog_, 'show');

      mdDialog.show.and.callFake(function () {
        return {
          then: function (callBack) {
            callBack(true); //return the value to be assigned.
          }
        }
      });

      vm = _$controller_('MainController', {$mdDialog: mdDialog});

    }));

    it('should open a dialog ', function() {
      vm.showAlert();
      vm.$digest();
      expect(mdDialog.show).toHaveBeenCalled();
      expect(vm.status).toBe(true);
    });

    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.employees)).toBeTruthy();
      expect(vm.employees.length === 4).toBeTruthy();
    });
  });
})();
