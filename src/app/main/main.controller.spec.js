(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var employees;


    beforeEach(module('employeeList'));
    beforeEach(inject(function(_$controller_, _employees_, _$mdDialog_) {

          spyOn(_$mdDialog_, 'show').and.callThrough();

      vm = _$controller_('MainController');
      $mdDialog = _$mdDialog_;
    }));

    it('should show a Toastr info and stop animation when invoke showToastr()', function() {
      showAlert();
      expect($mdDialog.show).toHaveBeenCalled();
    });

    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.employees)).toBeTruthy();
      expect(vm.employees.length === 4).toBeTruthy();
    });
  });
})();
