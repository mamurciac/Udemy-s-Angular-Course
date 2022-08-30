"use strict";
(() => {
    const sumarNumeros1 = (numero1, numero2) => {
        return numero1 + numero2;
    };
    const sumarNumeros2 = (numero1, numero2) => numero1 + numero2;
    const saludar = () => "Hola Mundo!!!";
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve("Hola mundo!!!");
        });
    };
    obtenerSalario().then(mensajeExito => console.log(mensajeExito));
})();
