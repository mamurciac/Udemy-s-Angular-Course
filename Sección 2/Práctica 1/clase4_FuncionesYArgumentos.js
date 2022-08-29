"use strict";
(function () {
    //Función que tiene un argumento obligatorio, un argumento opcional y un argumento por defecto
    function activarHabilidad(nombre, momento, objeto = "batiseñal") {
        if (momento) {
            console.log(`${nombre} activó el(la) ${objeto} en el(la) ${momento}`);
        }
        else {
            console.log(`${nombre} activó el(la) ${objeto}`);
        }
        //Forma equivalente de mostrar el mensaje
        //if(momento != undefined){
        //    console.log(`${nombre} activó el(la) ${objeto} en el(la) ${momento}`);
        //}else{
        //    console.log(`${nombre} activó el(la) ${objeto}`);
        //}
    }
    activarHabilidad("Gordon", "noche"); //Se llama la función para ejecutarse
    activarHabilidad("Gordon"); //Se llama la función para ejecutarse
})();
