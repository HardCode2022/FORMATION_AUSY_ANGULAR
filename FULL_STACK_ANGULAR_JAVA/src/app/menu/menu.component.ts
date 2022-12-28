import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { UsersService } from '../service/data/users.service';
import { User } from '../users/users.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  afficheRecherche:boolean=false;
  errorMessage:string;

  users:User[];

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService
    ,private basicAuthenticationService: BasicAuthenticationService, private serviceUser:UsersService) { }

  //appel de service pou une initialisation de la recuperation des données
  ngOnInit() {
    this.serviceUser.recupererListeUsers().subscribe({
      next : users=> {
          this.users=users;
       },
       error : err => this.errorMessage=err
   });
  }
}
