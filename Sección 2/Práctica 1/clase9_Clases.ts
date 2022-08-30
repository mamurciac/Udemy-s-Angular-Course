(() => {
    class Avenger1{
        nombre: string = "Sin nombre"; //Propiedad con valor por defecto
        equipo: string = "Sin equipo"; //Propiedad con valor por defecto
        nombreReal?: string; //Propiedad opcional
        puedePelear: boolean = true;
        numeroPeleasGanadas: number = 0;

        constructor(nombre: string, equipo: string, nombreReal?: string, puedePelear: boolean  = true, peleasGanadas: number = 0){
            this.nombre = nombre;
            this.equipo = equipo;
        }
    }

    class Avenger2{
        constructor(public nombre: string, public equipo: string, public nombreReal?: string, public puedePelear: boolean  = true, public peleasGanadas: number = 0){}
    }

    const antman1 = new Avenger1('Antman', 'Capi');
    const antman2 = new Avenger2('Antman', 'Capi');
    console.log(antman1);
    console.log(antman2);
})();