(function($angular, _, $window){
    $window.$angular.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'templates/inicio.html', controller: 'MainController'
        })
        .when('/login', {
            templateUrl: 'templates/login.html', controller: 'MainController'
        })
        .otherwise({
            templateUrl: 'templates/inicio.html', controller: 'MainController'
        });
    }])
	.controller('MainController', ['$scope', '$http', '$location', function ($scope, $http, sesion, $location) {
        $scope.menus = [
            { label: 'Inicio', clase:'fi-home', href: '#/', activo: false },
            { label: 'Login', clase:'fi-torso', href: '#/login', activo: false },
            { label: 'Registro de usuarios', clase:'fi-plus', href: '#/login', activo: false },
            { label: 'Gestión de roles', clase:'fi-torsos-all', href: '#/cargos', activo: false },
            { label: 'Gestión de permisos', clase:'fi-clipboard-pencil', href: '#/turnos', activo: false },
            { label: 'Gestión de clientes', clase:'fi-torso', href: '#/empleados', activo: false },
            { label: 'Gestión de proveedores', clase:'fi-torso', href: '#/empleados', activo: false },
            { label: 'Gestión de usuarios', clase:'fi-torsos', href: '#/empleados', activo: false },
            { label: 'Gestión de productos', clase:'fi-book', href: '#/empleados', activo: false },
            { label: 'Gestión de ventas', clase:'fi-dollar', href: '#/empleados', activo: false },
            { label: 'Gestión de compras', clase:'fi-shopping-bag', href: '#/empleados', activo: false },
            { label: 'Catálogo de productos', clase:'fi-shopping-cart', href: '#/empleados', activo: false },
            { label: 'Respaldo base de datos', clase:'fi-database', href: './api/files/backup', activo: false }
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