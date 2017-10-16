(function() {
  'use strict';

  angular
    .module('employeeList')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
