import { Pipe ,PipeTransform } from '@angular/core';

@Pipe({
  name:'convertToList',
})

export class ConvertTolist implements PipeTransform {
  transform(value:string):string{
    let splitArray:string[]=null;
   //On découpe la chaîne "str" à traiter et on récupère le résultat dans le tableau "splitArray"
   splitArray =  value.split(",");
     return `
        <ul>
          <li>${splitArray[0]}</li>
          <li>${splitArray[1]}</li>
          <li>${splitArray[2]}</li>
        </ul>`;
}

}
