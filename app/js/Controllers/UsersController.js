(function() {
    'use strict';

    angular
        .module('app')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['UserAPIServices'];

    /* @ngInject */
    function UsersController(UserAPIServices) {
        var vm    = this;
        vm.search = search;

        activate();

        ////////////////

        function activate() {
          // 
        }
        function search (username) {
            if (username) {
                return UserAPIServices.searchUser(username)
                    .then(function(data) {
                        vm.user = data;
                        return vm.user;
                    });
            } else {
                // show error
            } 
        }
    }
})();