import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarContrasena'
})
export class MostrarContrasenaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
