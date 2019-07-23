app.controller('mainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.modales = './src/views/search.tmpl.html';
    $scope.modalesc = './src/views/contacto.tmpl.html';
    //menu active
    $scope.tabActive = function(itemM) {
        $scope.mmHome="";
        $scope.oficina="";
        $scope[itemM]="active";
    }

    $scope.openModalSearch = function () {
        $('.ui.modal.searchm').modal('show');
    }
    $scope.openMenu = function() {
        $('.menuprincipal').transition('slide up');
    }
    $scope.closeSearch = function() {
        $('.ui.modal.searchm').modal('hide');
    }
    $scope.closeContact = function() {
        $('.ui.modal.contactom').modal('hide');
    }
    $scope.openContacto = function() {
    $('.ui.modal.contactom').modal('show');
    }

    // modal ayuda de buscador
    $scope.openModalHelp = function() {
        $('.ui.modal.help').modal('show');
    }
    
    // curva de titulo de contactos
    $scope.titleContacto = function () {
        $(function() {})
                $('.titleContacto').arctext({
                    radius: 300
                })
    }
    $timeout(function () {
        $scope.titleContacto()
    },100)




$scope.SearchAutomatic = function() {
    $('.ui.search').search({ source: $scope.palabras });
}
$scope.SearchAutomatic();
    $scope.palabras = [
    { title: 'Andorra' },
    { title: 'United Arab Emirates' },
    { title: 'Afghanistan' },
    { title: 'Antigua' },
    { title: 'Anguilla' },
    { title: 'Albania' },
    { title: 'Armenia' },
    { title: 'Netherlands Antilles' },
    { title: 'Angola' },
    { title: 'Argentina' },
    { title: 'American Samoa' },
    { title: 'Austria' },
    { title: 'Australia' },
    { title: 'Aruba' },
    { title: 'Aland Islands' },
    { title: 'Azerbaijan' },
    { title: 'Bosnia' },
    { title: 'Barbados' },
    { title: 'Bangladesh' },
    { title: 'Belgium' },
    { title: 'Burkina Faso' },
    { title: 'Bulgaria' },
    { title: 'Bahrain' },
    { title: 'Burundi' }
    // etc
];

}])

