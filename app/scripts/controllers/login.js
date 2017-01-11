'use strict';

/**
 * @ngdoc function
 * @name proyecto1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyecto1App
 */
angular.module('proyecto1App')

    .controller('LoginCtrl', function ($scope, $location, ServerService, MyServiceMenu, config, $interval, MyService, $rootScope) {

        console.log("LLega al controlador");

        $scope.submit = function () {

            //llamada asincrona-->
            console.log("LLega aqui");
            var user = $scope.username;
            var pass = $scope.password;
            var ok;
            var ciudades;
            var brigadas;

            //<--llamada asincrona
            ServerService.SendData('LOGIN', user, pass)
                .getAll()
                .then(function (data) {
                    // recibiendo los datosdesde el servidor
                    ok = data.datos[0][0];
                    ciudades = data.datos[1];
                    brigadas = data.datos[2];
                    console.log(ok);
                    console.log(ciudades);
                    console.log(brigadas);
                    // se ejecuta luego de hacer el asincrono
                    verificaUsuario();

                });
            //<--llamada asincrona

            function verificaUsuario() {

                // verifica al usuario y direcciona en el proyecto
                if (ok == 'OK') {

                    MyService.data.name = ciudades;

                    $rootScope.loggedIn = true;

                    //-------------------------- configuracion de el menu lateral para las recepciones desde el servicio
                    MyServiceMenu.dataMenu.boton1 = true;
                    MyServiceMenu.dataMenu.boton2 = true;
                    MyServiceMenu.dataMenu.boton3 = true;//TODO: por siacaso este boton esta solo habilitado para prueba en realidad va cambiar OJO
                    MyServiceMenu.dataMenu.boton4 = false;
                    MyServiceMenu.dataMenu.boton5 = false;
                    MyServiceMenu.dataMenu.boton6 = false;
                    MyServiceMenu.dataMenu.boton7 = false;
                    MyServiceMenu.dataMenu.boton8 = false;
                    MyServiceMenu.dataMenu.boton9 = false;
                    //--------------------------------------------------------------------------------------------------

                    $location.path('/calidadLaPaz');
                    //$location.url('/proyecto1Dashboard');

                } else if ($scope.username == 'usuario1' && $scope.password == 'usuario1') {

                    //$rootScope.loggedIn = true;

                    $location.path('/');

                }
                else {

                    $scope.verMensaje = true;

                    $scope.mensaje = 'Usuario no registrado!';
                }
            }
        }
    });