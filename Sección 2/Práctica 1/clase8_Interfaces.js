"use strict";
(() => {
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    const enviarAMision1 = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    };
    const regresarAlCuartel1 = (xmen) => {
        console.log(`${xmen.nombre} regresando de la misión`);
    };
    enviarAMision1(wolverine);
    regresarAlCuartel1(wolverine);
    const enviarAMision2 = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    };
    const regresarAlCuartel2 = (xmen) => {
        console.log(`${xmen.nombre} está regresando de la misión`);
    };
    enviarAMision2(wolverine);
    regresarAlCuartel2(wolverine);
})();
