import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
    <h1>{{pagetitle}}</h1>
    <div>Mon Premier Composant Angular</div>
</div>
  `
})
export class AppComponent {
  pagetitle:string = 'PRODUCTION DE MANGUE EN GUINEE';
}
