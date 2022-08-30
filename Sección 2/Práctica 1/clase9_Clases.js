"use strict";
(() => {
    class Avenger1 {
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = "Sin nombre"; //Propiedad con valor por defecto
            this.equipo = "Sin equipo"; //Propiedad con valor por defecto
            this.puedePelear = true;
            this.numeroPeleasGanadas = 0;
            this.nombre = nombre;
            this.equipo = equipo;
        }
    }
    class Avenger2 {
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman1 = new Avenger1('Antman', 'Capi');
    const antman2 = new Avenger2('Antman', 'Capi');
    console.log(antman1);
    console.log(antman2);
})();
