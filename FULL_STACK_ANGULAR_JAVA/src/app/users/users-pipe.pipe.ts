import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersPipe'
})
export class UsersPipePipe implements PipeTransform {

  transform(value: string) {

    let traitementSortie: string[] = null
    traitementSortie = value.split(",")

    if (traitementSortie != null && traitementSortie.length == 3) {
      return `
    <ul>
    <li>${traitementSortie[0]}</li>
    <li>${traitementSortie[1]}</li>
    <li>${traitementSortie[2]}</li>
   </ul>
    `;
    }
    else if (traitementSortie != null && traitementSortie.length == 2) {
      return `
    <ul>
    <li>${traitementSortie[0]}</li>
    <li>${traitementSortie[1]}</li>
    `
    } else
      return `
    <ul>
    <li>${traitementSortie[0]}</li>
    `
    {

    }

  }

}
