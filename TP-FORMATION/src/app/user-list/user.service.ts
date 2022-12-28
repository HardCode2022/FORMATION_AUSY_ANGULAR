import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { Iuser } from './user';
import { catchError,tap, map } from 'rxjs/operators';
import { IusersSettings } from '../formulaire/Iusers-settings';


@Injectable({
  providedIn:'root'
})

export class UserService{
  private userUrl="api/users/users.json";

  constructor(private http:HttpClient){}

  getUsers(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.userUrl).pipe(
          tap(data=>console.log('All:' + JSON.stringify(data))),catchError(this.handleError));
     }

  private handleError(err: HttpErrorResponse) {

    let errorMessage='';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `Une erreur est servenu : ${err.error.message}`;
    }
    else{
      errorMessage=`Le serveur a retourner le code ${err.status}, erreur message est :${err.message}`;

    }
      console.error(errorMessage);
      return throwError(errorMessage);
     }
     getUser(id:number):Observable<Iuser|undefined>{
      return this.getUsers()
      .pipe(map((users: Iuser[]) => users.find(u => u.userId === id))
      );
     }

     postNewUser(donnesUsers:IusersSettings): Observable<any>{
      return this.http.post('https://putsreq.com/gWAihAJWRo34h5P2jjaP', donnesUsers);

      }

      getTypePoste():Observable<string[]>{
        return of (['Chef de Projet','Developpeur','Architecte','Testeur','Recetteur'])
      }
  }
