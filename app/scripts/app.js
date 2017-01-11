'use strict';

/**
 * @ngdoc overview
 * @name proyecto1App
 * @description
 * # proyecto1App
 *
 * Main module of the application.
 */
angular
    .module('proyecto1App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMap',
        'ui.grid',
        'leaflet-directive'
    ])
    // factorias de mi aplicacion
    .factory("MyService", function () {
        return {
            data: {}
        };
    })
    .factory("MyServiceMenu", function () {
        return {
            dataMenu: {}
        };
    })

    .constant('config', {SSID: '0', URLSERV: 'http://10.1.0.25:8000/', VART: []})
    //servidor de oscar
    //.constant('config', {SSID: '0', URLSERV: 'http://10.1.6.98:8000/', VART: []})

    .service('ServerService', function ($http, $q, config) {

        this.SendData = function (comm, datatable, type) {
            return {
                getAll: getAll
            };
            function getAll() {
                //var data = JSON.stringify({sessionId: sessionId, comm: comm, query: query, colName: colname});
                var data = JSON.stringify({sessionId: config.SSID, comm: comm, datatable: datatable, type: type});
                var defered = $q.defer();
                var promise = defered.promise;
                $http({
                    method: 'POST',
                    url: config.URLSERV,
                    data: data,
                    headers: {'Content-Type': 'application/json;'}
                })
                    .then(function (result) {
                        config.SSID = result.data.sessionId;
                        console.log("SSID:" + config.SSID);
                        console.log("data:" + result.data);
                        defered.resolve(result.data);
                        //return d.promise.$$state.status;
                    });
                console.log(promise);
                return promise;
            }

            //return data;
        };
    })

    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {

                resolve: {
                    "check": function ($location, $rootScope) {
                        if (!$rootScope.loggedIn) {
                            $location.path('/');
                        }
                    }
                },
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/', {
                resolve: {
                    "check": function ($location, $rootScope) {
                        if (!$rootScope.loggedIn) {
                            $location.path('/');
                        }
                    }
                },
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            //------------------------------ rutas hacia el dashboard principal-----------------------------------------
            .when('/dashboard', {
                templateUrl: 'views/dashboard/dashboard.html',
                controller: 'Dashboard',
                controllerAs: 'dashboard'
            })
            //------------------------------ este es las rutas de departamento La Paz ----------------------------------------
            .when('/calidadLaPaz', {

                templateUrl: 'views/lapaz/calidadLaPaz.html',
                controller: 'CalidadLaPaz',
                controllerAs: 'calidadLaPaz'
            })
            .when('/coberturaLaPaz', {

                templateUrl: 'views/lapaz/coberturaLaPaz.html',
                controller: 'CoberturaLaPaz',
                controllerAs: 'coberturaLaPaz'

            }).when('/rendimientoLaPaz', {

                templateUrl: 'views/lapaz/rendimientoLaPaz.html',
                controller: 'RendimientoLaPaz',
                controllerAs: 'rendimientoLaPaz'
            })
            //------------------------------ este es las rutas de departamento Chuquisaca ----------------------------------------
            .when('/calidadChuquisaca', {

                templateUrl: 'views/chuquisaca/calidadChuquisaca.html',
                controller: 'CalidadChuquisaca',
                controllerAs: 'calidadChuquisaca'
            })
            .when('/coberturaChuquisaca', {

                templateUrl: 'views/chuquisaca/coberturaChuquisaca.html',
                controller: 'CoberturaChuquisaca',
                controllerAs: 'coberturaChuquisaca'

            }).when('/rendimientoChuquisaca', {

                templateUrl: 'views/chuquisaca/rendimientoChuquisaca.html',
                controller: 'RendimientoChuquisaca',
                controllerAs: 'rendimientoChuquisaca'
            })
            //-----------------------------------pruebas de contenido en el app---------------------------------
            .when('/calidadPrueba', {
                templateUrl: 'views/prueba/calidadPrueba.html',
                controller: 'CalidadPrueba',
                controllerAs: 'calidadPrueba'
            })
            .when('/coberturaPrueba', {

                templateUrl: 'views/prueba/coberturaPrueba.html',
                controller: 'CoberturaPrueba',
                controllerAs: 'coberturaPrueba'

            })
            .when('/rendimientoPrueba', {
                templateUrl: 'views/prueba/rendimientoPrueba.html',
                controller: 'RendimientoPrueba',
                controllerAs: 'rendimientoPrueba'
            })
            //----------------------------------------------------------------------------------------------------------
            .otherwise({

                redirectTo: '/'

            });
    })