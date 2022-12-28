import { Component } from '@angular/core';
@Component({
  selector: 'maurice-root',
  template: `
     <div>
          <h1>{{pageTitle}}</h1>
         <div>Mon Premier Composant</div>
    </div> `

})
export class AppComponent {
  pageTitle: string = 'Production de mangue a kindia';
}


