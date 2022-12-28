import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template:`
  <div>
  <mau-root> </mau-root>
  <!--<div class="ui container"><h1>{{pageTitle}}</h1> </div>-->

  <div class="ui container">
      <div class="ui pointing menu">
          <a class="item" [routerLink]="['/bienvenue']">Accueil</a>
          <a class="item" [routerLink]="['/users']">Liste des utilisateurs</a>
          <a class="item" [routerLink]="['/formulaire']">Formulaire utilisateurs</a>
      </div>
  </div>

  <div class='container'>
     <router-outlet></router-outlet>
  </div>
</div>
  `
})
export class AppComponent {
  //pageTitle:string = 'Ausy Skills Application';
  title: any;
}
