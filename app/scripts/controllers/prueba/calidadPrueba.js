'use strict';

/**
 * @ngdoc function
 * @name proyecto1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyecto1App
 */
angular.module('proyecto1App')

    .controller('CalidadPrueba', function ($scope, $log, $http, MyService, MyServiceMenu, $rootScope) {

            //$scope.someProp = "abc";
            $scope.showMe = function () {
                //alert("Aqui se muestra el ID seleccionado :" + $scope.someProp);
                alert("llega el dato desde la tabla :");
            };
            $scope.gridOptions = {};
            // configuracion de el grid


            //---------------ejemplo para llenar una tabla desde contenido json desde un servcioon
            $http.get('http://localhost/webapp_monitoreo_4/app/assets/miembros.json').success(function (data) {
                $scope.gridOptions.data = data;
                console.log("LLega al dato miembros");
            })

            /*$scope.gridOptions.data = [
             {
             "id": "58765713fa6e160c1fd05c46",
             "name": "Obrien Callahan",
             "gender": "male",
             "email": "obriencallahan@darwinium.com",
             "latitude": -39.419906,
             "longitude": -41.446007
             },
             {
             "id": "58765713f4e9ba03dab97910",
             "name": "Susie Vargas",
             "gender": "female",
             "email": "susievargas@darwinium.com",
             "latitude": -87.283675,
             "longitude": -101.756884
             },
             {
             "id": "5876571320fedd9497b49aea",
             "name": "Lindsey Gilliam",
             "gender": "male",
             "email": "lindseygilliam@darwinium.com",
             "latitude": -14.001622,
             "longitude": -46.730812
             },
             {
             "id": "58765713e3cce055344fdf68",
             "name": "Fannie Horn",
             "gender": "female",
             "email": "fanniehorn@darwinium.com",
             "latitude": 15.087919,
             "longitude": -3.323186
             },
             {
             "id": "5876571342b788eb5db0dab1",
             "name": "Patti Grimes",
             "gender": "female",
             "email": "pattigrimes@darwinium.com",
             "latitude": 21.934083,
             "longitude": 165.111114
             }
             ];
             */
            $scope.gridOptions.columnDefs = [
                {name: 'id'},
                {name: 'name'},
                {name: 'gender'},
                {name: 'email'},
                {name: 'latitude'},
                {name: 'longitude'},
                {
                    name: 'ShowScope',
                    cellTemplate: '<button class="btn primary" ng-click="grid.appScope.showMe()">Click Me</button>'
                }
            ];
            // ejemplo de llenado desde una bariable json interna
            /*
             $scope.myData = [
             {
             "firstName": "Cox",
             "lastName": "Carney",
             "company": "Enormo",
             "employed": true
             },
             {
             "firstName": "Lorraine",
             "lastName": "Wise",
             "company": "Comveyer",
             "employed": false
             },
             {
             "firstName": "Nancy",
             "lastName": "Waters",
             "company": "Fuelton",
             "employed": false
             }
             ];
             */


            //-----------------------------------------------------------------
            $scope.lugar = 'Calidad Prueba';

            $scope.miLista = [
                'Calidad 1',
                'Calidad 2',
                'Calidad 3',
                'Calidad 4',
                'Calidad 5',
                'Calidad 6'
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

        }
    )
;