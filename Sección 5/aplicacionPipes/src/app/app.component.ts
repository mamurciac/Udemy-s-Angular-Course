import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nombre: string = "Capitán América";
  nombreCompleto: string = "mIcHaEl AnDRéS mURciA CoNTreRas";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numeroPi: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/AVAELaAOkCY';
  seMuestraContrasena: boolean = false;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegaron los datos');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Evergreen Terrace',
      numero: 742
    }
  }
}
