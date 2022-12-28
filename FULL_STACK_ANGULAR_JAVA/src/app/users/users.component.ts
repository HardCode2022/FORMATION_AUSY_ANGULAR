import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { UsersService } from '../service/data/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  imageSize: number = 50;
  imageWidth: number = 50;
  imageMargin: number = 2;


  pageTitle: string = 'Mes Utilisateurs';

  noteMessage:string

  montrerNote:boolean=false;

  errorMessage: string ="Une erreur a été rencontrer lors de la recuperation de la liste des utilisateurs"

  users: User[];
  
  //Initialisation de tableau pour le filtre des utilisateurs
  filtrerUsers: User[];

  message:string;

  //creation d'un string avec les get et set pour la recuperation des données apres traitement du filtre
  _filtreUtilisateur: string;


  public get filtreUtilisateur(): string {
    return this._filtreUtilisateur;
  }

  public set filtreUtilisateur(value: string) {
    this._filtreUtilisateur = value;
    this.filtrerUsers = this.filtreUtilisateur ? this.filtreDeRecherche(this.filtreUtilisateur) : this.users
  }
  //Traitement qui permet de filtre les Utilisateurs
  filtreDeRecherche(filtreUtilisateur: string): User[] {
    filtreUtilisateur = filtreUtilisateur.toLocaleLowerCase();
    return this.users.filter((utilisateur: User) => utilisateur.nom.toLocaleLowerCase().indexOf(filtreUtilisateur) !== -1);
  }


  constructor(private serviceUser: UsersService,private router:Router) { }

  ngOnInit() {
    this.mettreAJourUtilisateurs();
  }

  montrerNotes(){
    this.montrerNote=!this.montrerNote
  }
 //Affichage de la note
  onRatingClicked(message: string): void {
    this.noteMessage = 'La note utilisateur selectionner est de : ' + message;
  }

  //Mis à jour d'un utilisateur
  mettreAjour(id){
    console.log(`Mis à jour de l'utilisateur ${id}`)
    this.router.navigate(['utilisateur',id])
  }

  supprimer(id){
    console.log(`Suppression de de l'utilisateur avec l'Id ${id}`)
    this.serviceUser.supprimerUtilisateur(id).subscribe(
      data=>{
        console.log(data);
        this.message=`L'utilisateur avec l'id ${id} à été supprimer avec succes`
        this.mettreAJourUtilisateurs();
      }

    )

  }

  //Naviguer vers la page d'ajout d'un l'utilisateur
  ajouterUtilisateur(){
    this.router.navigate(['utilisateur',-1])
  }

  mettreAJourUtilisateurs() {
    this.serviceUser.recupererListeUsers().subscribe({
      next: users => {
        this.users = users;
        this.filtrerUsers = this.users;
      },
      error: err => this.errorMessage = err
    });

  }

}

export class User {
  constructor(
    public id: number,
    public nom: string,
    public age: number,
    public poste: string,
    public competences: string,
    public note: string,
    public image: string) {
  }
}

