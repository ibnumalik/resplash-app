(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['APIServices'];

    /* @ngInject */
    function ProfileController(APIServices) {
        var vm = this;
        vm.title = 'ProfileController';
        vm.search = search;

        activate();

        ////////////////

        function activate() {
          // 
        }
        function search (username) {
          // vm.username = username;
          console.log(username);
          return APIServices.connectAPI(username)
            .then(function(data) {
              vm.profiles = data;
              return vm.profiles;
            });
          
        }
    }
})();