export class Xmen{
    constructor(public nombre: string, public clave: string){}

    imprimir(){
        console.log(`Xmen: ${this.nombre} -> ${this.clave}`);
    }
}