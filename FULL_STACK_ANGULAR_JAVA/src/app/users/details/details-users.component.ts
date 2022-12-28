import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsersService } from 'src/app/service/data/users.service';
import { User } from '../users.component';

@Component({
  selector: 'app-details-users',
  templateUrl: './details-users.component.html',
  styleUrls: ['./details-users.component.css']
})
export class DetailsUsersComponent implements OnInit {

  pageTitle:string='Utilisateur'
  id: number
  user: User
  errorMessage: string

  constructor(private route: ActivatedRoute,private router: Router,private usersService: UsersService) { }

  ngOnInit() {

    console.log(this.route.snapshot.params['id'])
    //Recuoeration du parametre id pour la redirection
    const paramId= this.route.snapshot.params['id'];

    if (paramId) {
      const id=+paramId
      this.recupererUlitilsateurParId(id)
    }
}
  recupererUlitilsateurParId(id: number) {

    this.usersService.recuperationUtilisateurParId(id).subscribe({
      next: data => {
        this.user = data
       },
    error: err => this.errorMessage = err
  });
  }

  onBack():void{
    this.router.navigate(['/users']);
  }

}
