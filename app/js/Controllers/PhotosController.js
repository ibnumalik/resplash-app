(function() {
    'use strict';

    angular
        .module('app')
        .controller('PhotosController', PhotosController);

    PhotosController.$inject = ['PhotosAPIServices'];

    /* @ngInject */
    function PhotosController(PhotosAPIServices) {
        var vm = this;
        vm.title = 'PhotosController';

        activate();

        ////////////////

        function activate() {
            return showPhoto();
        }
        function showPhoto(argument) {
            return PhotosAPIServices.getPhotos()
                .then(function(data) {
                    vm.photos = data;
                    return vm.photos;
                });
            
        }
    }
})();