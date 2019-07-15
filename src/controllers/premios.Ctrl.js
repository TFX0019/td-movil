app.controller('premiosCtrl', ['$scope', function ($scope) {

}])

app.controller('MyController', MyController);
function MyController() {
    this.owl = {
        items: 1,
        options: {
            loop: true,
            nav: false
        }
    };
}