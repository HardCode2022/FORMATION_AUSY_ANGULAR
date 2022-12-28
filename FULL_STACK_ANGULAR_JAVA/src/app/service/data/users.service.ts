import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TODO_JPA_API_URL } from 'src/app/app.constants';
import { Iuser } from 'src/app/users/user';
import { User } from 'src/app/users/users.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
//Appelle de service : Methode qui permet de recuperer la liste des utilisateurs
  recupererListeUsers() {
    return this.http.get<User[]>(`${TODO_JPA_API_URL}/utilisateurs`).pipe(
      map(
        data => {
          sessionStorage.setItem('affichageRecherche', 'Recherche');
          return data;
        }
      )
    );
  }
  //Appelle de service : Methode permettant de recuperer l'utilisateur par id
  recuperationUtilisateurParId(id){
    return this.http.get<User>(`${TODO_JPA_API_URL}/utilisateurs/${id}`).pipe(
      map(
        data=>{
          return data
        }
      ));
  }
  //Appelle de service : Methode permettant la creation d'un utilisateur en base de données
  creationUtilisateur(user){
    return this.http.post(`${TODO_JPA_API_URL}/utilisateurs/creation`,user);
  }
  //Appelle de service : Methode permettant la mis à jour d'un utilisateur en base de données
  misAjourUtilisateur(id,user){
    return this.http.put(`${TODO_JPA_API_URL}/utilisateurs/mettreAJour/${id}`,user);
  }

  //Appelle de service : Methode permettant la mis à jour d'un utilisateur en base de données
  supprimerUtilisateur(id){
    return this.http.delete(`${TODO_JPA_API_URL}/utilisateurs/supprimer/${id}`);
  }

  // Cette methode permetr de setter l'affichage de la plage de recherche
   affichageOUI() {
    let affiche = sessionStorage.getItem('affichageRecherche')
    return !(affiche === null)
  }
//Cette methode permet de supprimer dans la session la confirmation d'affichage de la plage de recherche
  nonAffichage() {
     sessionStorage.removeItem('affichageRecherche')
  }
}
