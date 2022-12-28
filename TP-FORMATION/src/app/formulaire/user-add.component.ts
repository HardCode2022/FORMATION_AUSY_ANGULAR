import { Component, OnInit, Input } from '@angular/core';
import { IusersSettings } from './Iusers-settings';
import { NgForm } from '@angular/forms';
import { UserService } from '../user-list/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  //selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {


  @Input() pattern : number | RegExp;

  InterfaceDonneesUsers : IusersSettings={
    Nom : null,
    Age : null,
    Job : null,
    Rating : null,
    jee : null,
    java:null,
    angular:null,
    sao: null,
    javascript: null,
    junit: null,
    selenium: null,
    squash: null,
    robot: null,
    cpp: null,
    net: null,
    scrum: null,
    kanban: null
  };

  typePose:Observable<string[]>;

  postError: boolean=false;
  postErrorMessage='';

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.typePose=this.usersService.getTypePoste();
  }

  soumettre(form:NgForm){
    console.log('Dans soummission', form.valid);

  if (form.valid) {
    this.usersService.postNewUser(this.InterfaceDonneesUsers).subscribe(
      result=>console.log('succes',result),
      error=>this.onHttpError(error)
  );
  }else {
    this.postError=true;
    this.postErrorMessage="Merci de corriger les erreurs avant la soumission"
  }

  }
  onHttpError(errorResponse: any): void {
    console.log('error',errorResponse)
    this.postError=true;
    this.postErrorMessage=errorResponse.error.errorMessage;
  }

}
