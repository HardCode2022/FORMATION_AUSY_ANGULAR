import { HelloWorldBean, WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute, Router } from '@angular/router';
//package com.in28minutes.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';//'./app.component';
import { UsersService } from '../service/data/users.service';
//import { AppComponent } from '../app.component';

//@ComponentScan(
//      value = "com.in28minutes.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {

  message = 'Quelques messages de bienvenue'
  welcomeMessageFromService:string
  name = ''
  //String message = "Some Welcome Message"

  //public SpringBootFirstWebApplication() {

  //ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private service:WelcomeDataService,
    private serviceUser:UsersService) {

  }

  // void init() {
  ngOnInit(){
    //COMPILATION ERROR this.message = 5
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
      //Traitement permettant d'afficher de supprimer l'affichage de la plage de recherche
      this.affichagePlageDeRecherche()

  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }


  affichagePlageDeRecherche(){
    if (this.serviceUser.affichageOUI()) {
       this.serviceUser.nonAffichage()
    }
   }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response =>{
        this.handleSuccessfulResponse(response)
      } ,
      error => this.handleErrorResponse(error)
    );

    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }
  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService =response.message
  }

  handleErrorResponse(error) {
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }

  onBack():void{
    this.router.navigate(['/todos']);
  }
}

export class Class1 {

}

export class Class2 {

}
