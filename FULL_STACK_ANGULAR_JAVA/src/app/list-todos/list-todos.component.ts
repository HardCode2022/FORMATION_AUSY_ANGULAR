import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/data/users.service';
import { pipe } from 'rxjs';



export class Todo {
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string

  afficheRecherche:boolean=false;

  constructor(
    private todoService:TodoDataService,
    private router : Router,private serviceUser:UsersService
  ) { }

  ngOnInit() {
    this.refreshTodos();
    //Traitement permettant d'afficher de supprimer l'affichage de la plage de recherche
    this.affichagePlageDeRecherche()
  }

  affichagePlageDeRecherche(){
    if (this.serviceUser.affichageOUI()) {
       this.serviceUser.nonAffichage()
    }
   }

  refreshTodos(){
    this.todoService.retrieveAllTodos('Maurice').subscribe(
      data => {
        console.log(data);
        this.todos = data;
      }
    )
  }

  deleteTodo(id) {
    console.log(`Suppression de la tâche ${id}` )
    this.todoService.deleteTodo('Maurice', id).subscribe (
      response => {
        console.log(response);
        this.message = `La tâche numero ${id} a été supprimer avec succès!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`Mis à jour ${id}`)


    
    this.router.navigate(['todos',id])
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }
  onBack() {
    this.router.navigate(['welcome','Maurice GUILAVOGUI'])
  }
}
