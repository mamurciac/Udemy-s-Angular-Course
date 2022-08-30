(function(){
    const funcion1 = function(nombre: string){
        return nombre.toUpperCase();
    }
    const funcion2 = (nombre: string) => nombre.toUpperCase();

    const sumar1 = function(numero1: number, numero2: number){
        return numero1 + numero2;
    }
    const sumar2 = (numero1: number, numero2: number) => numero1 + numero2;

    //Se llaman las funciones para ejecutarse y se muestra su resultado
    console.log(funcion1("Michael"));
    console.log(funcion2("Michael"));
    console.log(sumar1(11, 7));
    console.log(sumar2(11, 7));

    const hulk = {
        nombre: "Hulk",
        smash(){
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 2000);
        }
    }

    hulk.smash();
})();