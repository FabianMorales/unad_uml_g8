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
            { label: 'Inicio', clase:'fi-torso', href: '#/', activo: false },
            { label: 'Login', clase:'fi-home', href: '#/login', activo: false },
            { label: 'Gestión de cargos', clase:'fi-torsos-all', href: '#/cargos', activo: false },
            { label: 'Gestión de empleados', clase:'fi-torso', href: '#/empleados', activo: false },
            { label: 'Gestión de turnos', clase:'fi-clipboard-pencil', href: '#/turnos', activo: false },
            { label: 'Histórico', clase:'fi-clock', href: '#/historico', activo: false },
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