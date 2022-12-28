import { Component, OnInit } from '@angular/core';
import { Idonnees } from '../donnees/Iterface-donnees-setttings';
import { NgModel, NgForm } from '@angular/forms';
import { DonneesService } from '../donnees/donnees.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { DatepickerModule } from 'ngx-bootstrap/datepicker/public_api';
import { Time } from '@angular/common';


@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})
export class UserSettingsFormsComponent implements OnInit {

// Initialisation des données a null dans les differents champs
donneesSettings : Idonnees ={
 nom: null,
 emailOffres :null,
 InterfaceStyle:null,
 typeDeSouscription:null,
 commentaire:null
};


 singleModel="On";
 postError:boolean=false;
 postErrorMessage='';
 dateDebut:Date;
 heureDebut :Date;
 pourcentageUser=0;
 maxRating=5;

 typeDeSouscription:Observable<string[]>;

  constructor(private serviceDonnees:DonneesService) { }

  ngOnInit(): void {
    this.typeDeSouscription=this.serviceDonnees.getTypeDesouscription();
    this.dateDebut=new Date();
    this.heureDebut=new Date();
  }

  soumettre(form:NgForm){
    console.log("Dans la soumission du formulaire" , form.value);

    if (form.valid) {
        this.serviceDonnees.validerDonneesFormulaire(this.donneesSettings).subscribe(
        result=>console.log('succes',result),
        error=>this.onHttpError(error)
      );
    }
    else{
      this.postError=true;
      this.postErrorMessage="Merci de corriger les erreurs"
    }

  }

  onHttpError(errorResponse:any){
    console.log('error',errorResponse)
    this.postError=true;
    this.postErrorMessage=errorResponse.error.errorMessage;
  }

  dansBlur(field:NgModel){
    console.log("Dans le Blur" , field.valid)
  }
}
