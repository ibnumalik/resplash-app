(function() {
    'use strict';

    angular
        .module('app')
        .factory('PhotosAPIServices', PhotosAPIServices);

    PhotosAPIServices.$inject = ['$http', '__env'];

    /* @ngInject */
    function PhotosAPIServices($http, __env) {
        var baseUrl = 'https://api.500px.com/v1';
        var service = {
            getPhotos: getPhotos
        };
        return service;

        ////////////////

        function getPhotos() {
            return $http.get(baseUrl + 
                '/photos?consumer_key=' + __env.APIKEY + '&feature=fresh_today')
                .then(getPhotosComplete)
                .catch(getPhotosFailed);

            function getPhotosComplete(response) {
                return response.data;
            }

            function getPhotosFailed(error) {
                // body...
            }
        }
    }
})();