(() => {
    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }
    
    const enviarAMision1 = (xmen: {nombre: string}) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }
    const regresarAlCuartel1 = (xmen: {nombre: string}) => {
        console.log(`${xmen.nombre} regresando de la misión`);
    }
    enviarAMision1(wolverine);
    regresarAlCuartel1(wolverine);

    //Con esta interfaz se crea una especie de clase, pero a diferencia de las clases no tienen constructor ni métodos que definan su comportamiento
    interface Xmen{
        nombre: string;
        edad: number;
        poder?: string; //Este atributo es opcional
    }
    
    const enviarAMision2 = (xmen: Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }
    const regresarAlCuartel2 = (xmen: Xmen) => {
        console.log(`${xmen.nombre} está regresando de la misión`);
    }

    enviarAMision2(wolverine);
    regresarAlCuartel2(wolverine);
})();