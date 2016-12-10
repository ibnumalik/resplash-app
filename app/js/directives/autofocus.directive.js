(function() {
    'use strict';

    angular
        .module('app')
        .directive('autofocus', autofocus);

    autofocus.$inject = ['$timeout'];

    /* @ngInject */
    function autofocus($timeout) {
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
            $timeout(function () {
                element[0].focus();
            });
        }
    }

    /* @ngInject */
    function Controller() {

    }
})();