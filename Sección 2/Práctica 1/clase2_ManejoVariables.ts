(function(){
    let mensaje = "Hola"; //Typescript infiere el tipo de dato igual que Javascript (en este caso string)
    let numero = 18; //Typescript infiere el tipo de dato igual que Javascript (en este caso number)

    //Estas asignaciones son equivalentes
    //let mensaje: string = "Hola"; //Se indica el tipo de dato string explícitamente
    //let numero: number = 18; //Se indica el tipo de dato number explícitamente

    let valorBooleano = true;
    let fechaDia = new Date();

    //Las siguientes asignaciones son perfectamente válidas en Typescript pues se tiene el tipo de dato any que soporta cualquier tipo de dato (sea primitivo o no)
    let cualquierVariable;
    cualquierVariable = mensaje;
    cualquierVariable = numero;
    cualquierVariable = valorBooleano;
    cualquierVariable = fechaDia;

    //En este tipo de asignaciones, una misma variable puede soportar más de un tipo de dato
    let valor: string | number;
    valor = mensaje;
    valor = numero;

    let spiderman = {
        nombre: "Peter",
        edad: 30
    };
    //Se va a tener error si esta variable se asigna a un objeto con menos propiedades o con nuevas propiedades
    //spiderman = {
    //    nombre: "Juan"
    //};
    //spiderman = {
    //    nombre: "Peter",
    //    edad: 40,
    //    habilidad: "Trepar paredes"
    //};
    spiderman = {
        nombre: "Juan",
        edad: 40
    };
})();