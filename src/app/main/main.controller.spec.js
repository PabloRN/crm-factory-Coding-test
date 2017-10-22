(function() {
  'use strict';

  describe('Unit test AppController: mdDialog', function() {
    var vm, mdDialog;
    beforeEach(module('employeeList'));
    beforeEach(inject(function(_$controller_, $mdDialog) {
      //keep the reference, for later testing.
      mdDialog     = $mdDialog;
      var initData = [
        {
          "id"        : 1,
          "name"      : "Jhon Von Jovi",
          "age"       : 30,
          "gender"    : "Male",
          "status"    : "Single",
          "profession": "Singer"
        },
        {
          "id"        : 2,
          "name"      : "Adam Sandler",
          "age"       : 35,
          "gender"    : "Male",
          "status"    : "Married",
          "profession": "Actor"
        },
        {
          "id"        : 3,
          "name"      : "Serena Williams",
          "age"       : 40,
          "gender"    : "Female",
          "status"    : "Single",
          "profession": "athlete"
        },
        {
          "id"        : 4,
          "name"      : "Ronda Rousey",
          "age"       : 25,
          "gender"    : "Male",
          "status"    : "Single",
          "profession": "MMA"
        }
      ];

      spyOn(mdDialog, 'show');
      mdDialog.show.and.callFake(function () {
        return {
          then: function (callBack) {
            callBack(true); //return the value to be assigned.
          }
        }
      });


      vm           = _$controller_('MainController', {employees: initData}, {$mdDialog: mdDialog});


    }));

    it(': Opened', function() {
      var item = vm.employees[0];
      var ev = '';
      vm.showAlert(ev, item); //exercise the method.
      expect(mdDialog.show).toHaveBeenCalled();
    });
    it(': Have get the data', function() {
      expect(vm.employees.length).toBe(4);
    });
  });
})();
