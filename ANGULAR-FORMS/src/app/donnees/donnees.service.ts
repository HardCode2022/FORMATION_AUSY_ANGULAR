import { Injectable } from '@angular/core';
import { Idonnees } from './Iterface-donnees-setttings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {


  constructor(private http:HttpClient) { }

   validerDonneesFormulaire(donneesSetings:Idonnees):Observable<any>{
   return this.http.post('https://putsreq.com/gWAihAJWRo34h5P2jjaP',donneesSetings)
  }

  getTypeDesouscription(): Observable<string[]> {
    return of (['Semaines','Mois','Années','Trimestre','Semestre'])
  }
}
