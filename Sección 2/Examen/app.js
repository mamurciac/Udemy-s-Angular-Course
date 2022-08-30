"use strict";
(() => {
    const nombre = "Ricardo Tapia";
    const edad = 23;
    const personaje = {
        nombre: nombre,
        edad: edad
    };
    //var batman = {
    //    nombre: 'Bruno Díaz',
    //    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
    //}
    const batman = {
        nombre: "Bruno Díaz",
        artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
    };
    //Se convierte esta función en una función con el tipado estricto y en una función de flecha
    //function dobleSumaNumeros1(a, b){
    //    return (a + b) * 2;
    //}
    function dobleSumaNumeros2(numero1, numero2) {
        return 2 * (numero1 + numero2);
    }
    const dobleSumaNumeros3 = (numero1, numero2) => 2 * (numero1 + numero2);
    //Para la siguiente función, se establece el primer parámetro como obligatorio, el segundo parámetro como opcional y el tercer parámetro con valor por defecto "Arco"
    //function getAvenger(nombre, poder, arma:string){
    //    let mensaje;
    //    if(poder){
    //        mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    //    }else{
    //        mensaje = nombre + ' tiene un ' + poder;
    //    }
    //}
    function getAvenger(nombre, poder, arma = "Arco") {
        let mensaje;
        if (poder != undefined) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            mensaje = nombre + ' tiene un ' + poder;
        }
        return mensaje;
    }
    //Se crea una clase que permita manejar un tipo de dato llamado Rectangulo, esta tiene como propiedades la base y la altura, además de un método que retorne el área de la figura
    class Rectangulo {
        constructor(valorBase, valorAltura) {
            this.valorBase = valorBase;
            this.valorAltura = valorAltura;
            this.calcularArea2 = () => this.valorBase * this.valorAltura;
        }
        calcularArea1() {
            return this.valorBase * this.valorAltura;
        }
    }
})();
