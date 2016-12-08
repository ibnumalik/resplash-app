(function() {
    'use strict';

    angular
        .module('app')
        .factory('APIServices', APIServices);

    APIServices.$inject = ['$http', '$log', '__env'];

    /* @ngInject */
    function APIServices($http, $log, __env) {

        var API     = __env.APIKEY,
            service = {
            connectAPI: connectAPI
        };
        return service;

        ////////////////

        function connectAPI(username) {
          $log.info(__env.APIKEY);
          return $http.get("https://api.500px.com/v1/users/show?consumer_key=" + API + "&username=" + username)
            .then(getProfileComplete)
            .catch(getProfileFailed);

          function getProfileComplete (response) {
              return response.data;
          }
          function getProfileFailed (error) {
              $log.error('Failed to get data' + error.data);
          }
        }
    }
})();