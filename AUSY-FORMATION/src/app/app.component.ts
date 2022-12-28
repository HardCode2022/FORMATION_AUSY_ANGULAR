import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'> {{pagetitle}}</a>
   <ul class='nav nav-pills'>
    <li><a class='nav-link' [routerLink]="['/welcome']">Bienvenue</a> </li>
    <li><a class='nav-link' [routerLink]="['/products']">Liste des produits</a></li>
   </ul>
  </nav>

  <div class='container'>
     <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pagetitle: string = 'PRODUCTION';
}
