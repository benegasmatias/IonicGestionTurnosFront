import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'borraEspacios'
})
export class BorraEspaciosPipe implements PipeTransform {

  transform(value: string): string {
    var re = / /gi; 
    var newstr = value.replace(re, ""); 
    return newstr;
  }
}
