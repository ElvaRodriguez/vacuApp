import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filtrado'
})

export class FiltradoPipe implements PipeTransform {
    transform(arreglo: any[], texto: string): any[] {

        if(texto === ''){
          return arreglo;
        }
    
        texto = texto.toLowerCase();
        return arreglo.filter(item => {
          var dato = item.nombre_enfermedad;
          return dato.toLowerCase()
          .includes(texto);
        });
      }
}