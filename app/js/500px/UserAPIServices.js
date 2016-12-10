(function() {
    'use strict';

    angular
        .module('app')
        .factory('UserAPIServices', UserAPIServices);

    UserAPIServices.$inject = ['$http', '$log', '__env'];

    /* @ngInject */
    function UserAPIServices($http, $log, __env) {

        var API= __env.APIKEY;
        var baseUrl  = 'https://api.500px.com/v1';
        var services = {
            searchUser: searchUser
        };
        return services;

        ////////////////

        function searchUser(username) {
            return $http.get(baseUrl + '/users/show?consumer_key=' + API + '&username=' + username)
                .then(getProfileComplete)
                .catch(getProfileFailed);

          function getProfileComplete (response) {
              return response.data;
          }
          function getProfileFailed (error) {
              // $log.error('Failed to get data' + error.data);
          }
        }
    }
})();