(() => {
    const sumarNumeros1 = (numero1: number, numero2: number): number => {
        return numero1 + numero2;
    }
    const sumarNumeros2 = (numero1: number, numero2: number): number => numero1 + numero2;

    const saludar = (): string => "Hola Mundo!!!";

    const obtenerSalario = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve("Hola mundo!!!");
        });
    }
    obtenerSalario().then(mensajeExito => console.log(mensajeExito));
})();