import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../user-list/user';
import { UserService } from '../user-list/user.service';

@Component({
  //selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  pageTitle:string='Details Utilisateurs';
  user:Iuser;
  errorMessage:string;

  constructor(private route:ActivatedRoute,private userService :UserService,private router:Router) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getUser(id);
    }
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe({
      next: user => this.user = user,
      error: err => this.errorMessage = err
    });
  }
  onBack():void{
    this.router.navigate(['/users']);
  }
  onHome():void{
    this.router.navigate(['/bienvenue']);
  }
}
