(function () {
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
        function showPhoto() {
            return PhotosAPIServices.getPhotos()
                .then(function(response) {
                    vm.photos = response.photos;
                    return vm.photos;
                });
        }
    }
})();