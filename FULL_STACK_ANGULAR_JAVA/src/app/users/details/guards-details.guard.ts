import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GuardsDetailsGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
      let id=+next.url[1].path;
      if (isNaN(id) || id>10000000) {
        alert("Identifiant utilisateur saisie est invalide: Veuillez choisir le bon identifiants parmis les six (6) ! ");
        this.router.navigate(['/users']);
        return false;
      };
      return true;
  }
}
