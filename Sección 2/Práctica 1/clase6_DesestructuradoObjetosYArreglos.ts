(() => {
    const avenger = {
        nombre: "Steve",
        clave: "Capitán América",
        poder: "Droga"
    }
    
    //Se quiere mostrar en consola los valores de cada (o de algunas propiedades) propiedad del objeto avenger (Forma tradicional)
    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);

    //Se quiere mostrar en consola los valores de cada (o de algunas propiedades) propiedad del objeto avenger (Forma con manejo de desestructurado de objeto para extraer sus propiedades en variables/constantes)
    const {nombre, clave, poder} = avenger;
    console.log(nombre);
    console.log(clave);
    console.log(poder);

    //Se quiere mostrar en consola los valores de cada (o de algunas propiedades) propiedad del objeto avenger (Forma tradicional pero en una función de flecha)
    const extraer1 = (avenger: any) => {
        const {nombre, clave, poder} = avenger;

        console.log(nombre);
        console.log(clave);
        console.log(poder);
    }
    extraer1(avenger);

    //Se quiere mostrar en consola los valores de cada (o de algunas propiedades) propiedad del objeto avenger (Forma con manejo de desestructurado de objeto para extraer sus propiedades en variables/constantes pero en una función de flecha)
    const extraer2 = ({nombre, poder}: any) => {
        console.log(nombre);
        console.log(poder);
    }
    extraer2(avenger);

    const avengers: string[] = ["Thor", "Ironman", "Spiderman"];
    
    //Se quiere mostrar en consola cada (o algunos valores) valor del arreglo avengers (Forma tradicional)
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);

    //Se quiere mostrar en consola cada (o algunos valores) valor del arreglo avengers (Forma con manejo de desestructurado de arreglo para extraer sus propiedades en variables/constantes)
    const [thor, ironman, spiderman] = avengers;
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);

    const [, , arana] = avengers;
    console.log(arana);

    //Se quiere mostrar en consola cada (o algunos valores) valor del arreglo avengers (Forma tradicional pero en una función de flecha)
    const extraerArr1 = (avengers: string[]) => {
        console.log(avengers[0]);
        console.log(avengers[1]);
        console.log(avengers[2]);
    }
    extraerArr1(avengers);

    //Se quiere mostrar en consola cada (o algunos valores) valor del arreglo avengers (Forma con manejo de desestructurado de arreglo para extraer sus propiedades en variables/constantes pero en una función de flecha)
    const extraerArr2 = ([thor, ironman, spiderman]: string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }
    extraerArr2(avengers);
})();