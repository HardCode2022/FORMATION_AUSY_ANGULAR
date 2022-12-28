import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { UsersService } from '../service/data/users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  MessageDeconnexion='Vous êtes deconnecté du serveur avec succès'
  MessageAurevoir='Merci d`avoir utilisé cette application. A bientôt!!'

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService,private serviceUser:UsersService
  ) { }

  ngOnInit() {
    this.basicAuthenticationService.logout();
    //Traitement permettant d'afficher de supprimer l'affichage de la plage de recherche
    this.affichagePlageDeRecherche()
  }
  affichagePlageDeRecherche(){
    if (this.serviceUser.affichageOUI()) {
        this.serviceUser.nonAffichage()
    }
   }
}
