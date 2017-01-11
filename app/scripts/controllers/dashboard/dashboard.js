'use strict';

/**
 * @ngdoc function
 * @name proyecto1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyecto1App
 */
angular.module('proyecto1App')

    .controller('Dashboard', function ($scope, MyService, MyServiceMenu , $rootScope ) {

        $scope.lugar = 'Dashboard Principal';

        $scope.miLista = [
            'Dashboard 1',
            'Dashboard 2',
            'Dashboard 3',
            'Dashboard 4',
            'Dashboard 5',
            'Dashboard 6',
            'Dashboard 7'
        ];

        // est es el dato desde el servicio
        $scope.mensajePrincipal = MyService.data.name + ": Ciudades variable que viene desde el login JS";

        //-------------------------- Control de botonera lateral por medio de servicio   --------------------------------
        $scope.data = {};
        $scope.data.boton1 = MyServiceMenu.dataMenu.boton1;
        $scope.data.boton2 = MyServiceMenu.dataMenu.boton2;
        $scope.data.boton3 = MyServiceMenu.dataMenu.boton3;
        $scope.data.boton4 = MyServiceMenu.dataMenu.boton4;
        $scope.data.boton5 = MyServiceMenu.dataMenu.boton5;
        $scope.data.boton6 = MyServiceMenu.dataMenu.boton6;
        $scope.data.boton7 = MyServiceMenu.dataMenu.boton7;
        $scope.data.boton8 = MyServiceMenu.dataMenu.boton8;
        $scope.data.boton9 = MyServiceMenu.dataMenu.boton9;

    });