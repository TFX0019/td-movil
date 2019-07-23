app.controller('coleccionesCtrl', ['$scope', '$timeout', function($scope,$timeout) {
    $scope.categoriaFlag=false;
    $scope.initCategorias = function() {
        $(function() {
           $('.ui.accordion').accordion();
        })
    }
    $scope.initCategorias();
    $scope.openCategorias = function() {
        if ($scope.categoriaFlag == false) {
            $('.ui.styled.accordion').css('right', 0);
            $scope.categoriaFlag=true
        } else {
            $('.ui.styled.accordion').css('right', '-60%');
            $scope.categoriaFlag=false
        }
    }
}])