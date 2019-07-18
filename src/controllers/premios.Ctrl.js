app.controller('premiosCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.totalItems = {
        "total": 00,
        "index": 00
    };
    $scope.initRevista = function() {
        $(function() {
            $('.revista').owlCarousel({
                items: 1,
                margin: 0,
                loop: false,
                URLhashListener: false,
                onInitialized: totalItem
            })
            function totalItem(e) {
                $scope.totalItems.total = '0'+(e.item.count);
                $('#pagination-premios').text("0"+(e.item.index+1) + " / " + $scope.totalItems.total)
            }
            $('.revista').on('changed.owl.carousel', function (e) {
                $('#pagination-premios').text("0"+(e.item.index+1) + " / " + $scope.totalItems.total)
            })
        })
    }
    $timeout(function() {
        $scope.initRevista();
    },1000)
    $scope.premiosNext = function() {
        $('.revista').trigger('prev.owl.carousel');
    }
    $scope.premiosPrev = function () {
        $('.revista').trigger('next.owl.carousel');
    }
    $scope.openModalPages = function() {
        $('.ui.basic.modal').modal('show');
    }
    $timeout(function() {
            $scope.closePremios = function () {
                $('.ui.basic.modal').modal('hide');
            }
    }, 1000)
}])