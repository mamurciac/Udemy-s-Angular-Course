(() => {
    //console.log("Se inicia el programa");

    //const promesa1 = new Promise((resolve, reject) => {
    //    setTimeout(() => {
    //        reject("Se ha terminado el tiempo de espera");
    //    }, 3000);
    //});
    //promesa1.then(mensajeExito => console.log(mensajeExito)).catch(mensajeError => console.warn(mensajeError));

    //console.log("Se termina el programa");

    //Promesa en la que no se especifica el tipo de dato del valor que retorna, en este caso se tiene Promise<unknown>
    const retirarDinero1 = (montoRetirar: number) => {
        let dineroActual = 1000;

        return new Promise((resolve, reject) => {
            if(montoRetirar >= dineroActual){
                reject("No hay suficientes fondos");
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    }
    retirarDinero1(500).then(montoActual => console.log(`Me queda ${montoActual}`)).catch(error => console.log(error));

    //Promesa en la que se especifica el tipo de dato del valor que retorna, en este caso se tiene Promise<number>
    const retirarDinero2 = (montoRetirar: number): Promise<number> => {
        let dineroActual = 1000;

        return new Promise((resolve, reject) => {
            if(montoRetirar >= dineroActual){
                reject("No hay suficientes fondos");
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    }
    retirarDinero2(500).then(montoActual => console.log(`Me queda ${montoActual}`)).catch(error => console.log(error));
})();