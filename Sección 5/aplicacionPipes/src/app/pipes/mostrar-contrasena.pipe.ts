import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarContrasena'
})
export class MostrarContrasenaPipe implements PipeTransform {

  transform(value: string, seMuestraContrasena: boolean): string {
    return seMuestraContrasena ? value : '*'.repeat(value.length);
  }

}
