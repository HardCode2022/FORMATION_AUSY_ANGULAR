import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { UsersService } from 'src/app/service/data/users.service';
import { User } from '../users.component';

@Component({
  selector: 'app-ajout-utilisateurs',
  templateUrl: './ajout-utilisateurs.component.html',
  styleUrls: ['./ajout-utilisateurs.component.css']
})
export class AjoutUtilisateursComponent implements OnInit {

  id: number
  //age:number
  user: User
  errorMessage: string

  constructor(private route: ActivatedRoute, private router: Router, private userService: UsersService) { }

  ngOnInit() {

    console.log(this.route.snapshot.params['id'])
    //Recuoeration du parametre id pour la redirection
    this.id = this.route.snapshot.params['id'];
    //Initialiser dans un nouveau formulaire les valeurs
    // Elle peuvent etre modifier
    this.user = new User(this.id, '', 35, '', '', '', 'assets/images/titi.png');
    // Si il s'agit pas d'un nouveau utilisateur , alors on recupere l'utilisateur en BDD pour le mettre a jour
    if (this.id != -1) {
      this.userService.recuperationUtilisateurParId(this.id).subscribe({
        next: data => {
          this.user = data
        },
        error: err => this.errorMessage = err
      });

    }

  }
  enregisterUser(form: NgForm) {
    if (form.valid && this.id == -1) {
      this.userService.creationUtilisateur(this.user).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['users'])
        }
      )
    } else {
      this.userService.misAjourUtilisateur(this.id, this.user).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['users'])
        }
      )
    }
  }
  onBack() {
  this.router.navigate(['users'])
}
}
