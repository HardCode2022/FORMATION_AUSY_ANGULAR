import { Component, OnInit } from '@angular/core';
import { Iuser } from './user';
import { UserService } from './user.service';


@Component({
  // selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

   pageTitle : string ='Listes des Utilisateurs';

   imageSize:number=50;
   imageWidth:number=50;
   imageMargin:number=2;

   showRating:boolean=false;
   errorMessage:string;

   filteredUsers :Iuser[];
   
   users:Iuser[]=[];

  _userFilter: string;

  public get userFilter(): string {
    return this._userFilter;
  }
  public set userFilter(value: string) {
    this._userFilter = value;
    this.filteredUsers=this.userFilter ? this.performFilter(this.userFilter) : this.users;
  }

  toggleRating():void{
    this.showRating=!this.showRating;
  }
  constructor(private userService:UserService){
   // this._userFilter= " ";
  }
  performFilter(filterBy:string):Iuser[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.users.filter((user:Iuser)=>user.Nom.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next : users=> {
          this.users=users;
          this.filteredUsers=this.users;
       },
       error : err => this.errorMessage=err
   });
  }
}
