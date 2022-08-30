(function(){
    //Función que devuelve el sucesor de un número dado
    function numeroSucesor(numero: number){
        return numero + 1;
    }

    const nombre = "Fernando";
    const apellido = "Herrera";
    const edad = 33;

    //Se quiere mostrar en consola el nombre, apellido y edad con el siguiente formato: <Nombre> <Apellido> (Edad: <Edad>)
    let nombreCompleto1 = nombre + " " + apellido + " (Edad: " + edad + ")" + " (Próxima Edad: " + numeroSucesor(edad) + ")";
    let nombreCompleto2 = `${nombre} ${apellido} (Edad: ${edad}) (Próxima Edad: ${numeroSucesor(edad)})`;
    console.log(nombreCompleto1); //Resultado de Forma 1
    console.log(nombreCompleto2); //Resultado de Forma 2

    //Se quiere mostrar en consola el nombre, apellido y edad con el siguiente formato (incluyendo los saltos de línea): <Nombre> \n<Apellido> \n(Edad: <Edad>)
    let nombreCompleto3 = nombre + "\n" + apellido + "\n(Edad: " + edad + ")\n(Próxima Edad: " + numeroSucesor(edad) + ")";
    let nombreCompleto4 = `${nombre}
${apellido}
(Edad: ${edad})
(Próxima Edad: ${numeroSucesor(edad)})`;
    console.log(nombreCompleto3); //Resultado de Forma 1
    console.log(nombreCompleto4); //Resultado de Forma 2
})();