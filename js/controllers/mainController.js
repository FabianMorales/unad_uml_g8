(function($angular, _, $window){
    $window.$angular.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'templates/inicio.html', controller: 'MainController'
        })
        .when('/login', {
            templateUrl: 'templates/login.html', controller: 'MainController'
        })
        .when('/registro', {
            templateUrl: 'templates/registro.html', controller: 'MainController'
        })
        .when('/roles/lista', {
            templateUrl: 'templates/roles/lista.html', controller: 'MainController'
        })
        .when('/roles/editar', {
            templateUrl: 'templates/roles/form.html', controller: 'MainController'
        })
        .when('/permisos/lista', {
            templateUrl: 'templates/permisos/lista.html', controller: 'MainController'
        })
        .when('/permisos/editar', {
            templateUrl: 'templates/permisos/form.html', controller: 'MainController'
        })
        .when('/usuarios/lista', {
            templateUrl: 'templates/usuarios/lista.html', controller: 'MainController'
        })
        .when('/usuarios/editar', {
            templateUrl: 'templates/usuarios/form.html', controller: 'MainController'
        })
        .when('/clientes/lista', {
            templateUrl: 'templates/clientes/lista.html', controller: 'MainController'
        })
        .when('/clientes/editar', {
            templateUrl: 'templates/clientes/form.html', controller: 'MainController'
        })
        .when('/proveedores/lista', {
            templateUrl: 'templates/proveedores/lista.html', controller: 'MainController'
        })
        .when('/proveedores/editar', {
            templateUrl: 'templates/proveedores/form.html', controller: 'MainController'
        })
        .when('/productos', {
            templateUrl: 'templates/productos/catalogo.html', controller: 'MainController'
        })
        .when('/productos/lista', {
            templateUrl: 'templates/productos/lista.html', controller: 'MainController'
        })
        .when('/productos/editar', {
            templateUrl: 'templates/productos/form.html', controller: 'MainController'
        })
        .when('/compras/lista', {
            templateUrl: 'templates/compras/lista.html', controller: 'MainController'
        })
        .when('/compras/editar', {
            templateUrl: 'templates/compras/form.html', controller: 'MainController'
        })
        .when('/ventas/lista', {
            templateUrl: 'templates/ventas/lista.html', controller: 'MainController'
        })
        .when('/ventas/editar', {
            templateUrl: 'templates/ventas/form.html', controller: 'MainController'
        })
        .when('/despachos/lista', {
            templateUrl: 'templates/despachos/lista.html', controller: 'MainController'
        })
        .when('/despachos/editar', {
            templateUrl: 'templates/despachos/form.html', controller: 'MainController'
        })
        .when('/backups/lista', {
            templateUrl: 'templates/backups/lista.html', controller: 'MainController'
        })
        .when('/backups/programar', {
            templateUrl: 'templates/backups/form.html', controller: 'MainController'
        })
        .when('/reportes', {
            templateUrl: 'templates/reporte.html', controller: 'MainController'
        })
        .otherwise({
            templateUrl: 'templates/inicio.html', controller: 'MainController'
        });
    }])
	.controller('MainController', ['$scope', '$http', '$location', function ($scope, $http, sesion, $location) {
        $scope.menus = [
            { label: 'Inicio', clase:'fi-home', href: '#/', activo: false },
            { label: 'Login', clase:'fi-torso', href: '#/login', activo: false },
            { label: 'Registro de clientes', clase:'fi-plus', href: '#/registro', activo: false },
            { label: 'Gestión de clientes', clase:'fi-torso', href: '#/clientes/lista', activo: false },
            { label: 'Gestión de roles', clase:'fi-torsos-all', href: '#/roles/lista', activo: false },
            { label: 'Gestión de permisos', clase:'fi-clipboard-pencil', href: '#/permisos/lista', activo: false },
            { label: 'Gestión de proveedores', clase:'fi-torso', href: '#/proveedores/lista', activo: false },
            { label: 'Gestión de usuarios admin.', clase:'fi-torsos', href: '#/usuarios/lista', activo: false },
            { label: 'Gestión de productos', clase:'fi-book', href: '#/productos/lista', activo: false },
            { label: 'Gestión de ventas', clase:'fi-dollar', href: '#/ventas/lista', activo: false },
            { label: 'Gestión de compras', clase:'fi-shopping-bag', href: '#/compras/lista', activo: false },
            { label: 'Catálogo de productos', clase:'fi-shopping-cart', href: '#/productos', activo: false },
            { label: 'Gestión de despachos', clase:'fi-map', href: '#/despachos/lista', activo: false },
            { label: 'Respaldo base de datos', clase:'fi-database', href: '#/backups/lista', activo: false },
            { label: 'Reportes', clase:'fi-graph-bar', href: '#/reportes', activo: false }
        ];
        
        $scope.init = function() {
            
        };

        $scope.activar = function(menu){
            _.forEach($scope.menus, function(value, key) {
                value.activo = false;
            });

            menu.activo = true;
        };
    }]);
})(angular, window._, window);