app.controller('collagesCtrl', ['$scope', '$timeout', function ($scope,$timeout) {
    $scope.slideCollage = function() {
        $(function() {
            $('.collage').owlCarousel({
                center: true,
                items: 3,
                margin: -10,
                loop: true
            })
        })
    }
    $timeout(function() {
        $scope.slideCollage();
    }, 1000)
}])