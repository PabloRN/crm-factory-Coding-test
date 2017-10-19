(function() {
  'use strict';

  describe('controllers', function(){
    var vm, mdDialog;


    beforeEach(module('employeeList'));
    beforeEach(inject(function(_$controller_, _$mdDialog_) {

          spyOn(_$mdDialog_, 'show');


      vm = _$controller_('MainController', {$mdDialog: mdDialog});

    }));

    it('should open a dialog ', function() {
      vm.showAlert();
      vm.$digest();
      expect(mdDialog.show).toHaveBeenCalled();
      expect(vm.status).toBe(true);
    });

  });
})();
