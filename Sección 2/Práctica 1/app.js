"use strict";
(function () {
    function saludar(nombre) {
        console.table("Hola, " + nombre); //Salida esperada: Hola, Logan
    }
    const wolverine = {
        nombre: "Logan"
    };
    saludar(wolverine.nombre);
})();
