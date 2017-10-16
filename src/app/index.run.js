(function() {
  'use strict';

  angular
    .module('angularVacio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
