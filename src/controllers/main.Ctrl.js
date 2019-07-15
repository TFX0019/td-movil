app.controller('mainCtrl', ['$scope', function($scope) {
    $scope.modales = './src/views/search.tmpl.html';
    $scope.modalesc = './src/views/contacto.tmpl.html';
    $scope.openModalSearch = function () {
        $('.ui.modal.searchm').modal('show');
    }
    $scope.openMenu = function() {
        $('.menuprincipal').transition('slide up');
    }
    $scope.closeSearch = function() {
        $('.ui.modal.searchm').modal('hide');
    }
    $scope.openContacto = function() {
    $('.ui.modal.contactom').modal('show');
    }
}])