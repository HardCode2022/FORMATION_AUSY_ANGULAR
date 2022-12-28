import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Une erreur s`est produite! Contactez votre assistant applicative au 014235643. Désolé pour la gène occasionné'

  constructor() { }

  ngOnInit() {
  }

}
