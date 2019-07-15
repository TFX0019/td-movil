app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: './src/views/home.tmpl.html',
            controller: 'mainCtrl'
        })
        .when('/colecciones', {
            templateUrl: './src/views/colecciones.tmpl.html',
            controller: 'coleccionesCtrl'
        })
        .when('/contacto', {
            templateUrl: './src/views/contacto.tmpl.html',
            controller: 'contactoCtrl'
        })
        .when('/oficina', {
            templateUrl: './src/views/oficina.tmpl.html',
            controller: 'oficinaCtrl'
        })
        .when('/search', {
            templateUrl: './src/views/search.tmpl.html',
            controller: 'searchCtrl'
        })
        .when('/colecciones', {
            templateUrl: './src/views/colecciones.tmpl.html',
            controller: 'coleccionesCtrl'
        })
        .when('/premios', {
            templateUrl: './src/views/premios.tmpl.html',
            controller: 'premiosCtrl'
        })
        .when('/collages', {
            templateUrl: './src/views/collages.tmpl.html',
            controller: 'collagesCtrl'
        })
})