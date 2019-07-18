app.controller('searchCtrl', ['$scope', function ($scope) {
    $scope.tabActive("menuClass.search");
    $scope.openModalSearch = function() {
        $('.ui.basic.modal').modal('show');
        }
        $scope.openModalSearch();
}])