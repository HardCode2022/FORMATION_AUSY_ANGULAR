import { TodoComponent } from './todo/todo.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';
import { DetailsUsersComponent } from './users/details/details-users.component';
import { GuardsDetailsGuard } from './users/details/guards-details.guard';
import { AjoutUtilisateursComponent } from './users/ajouter/ajout-utilisateurs.component';

// welcome
const routes: Routes = [
  { path: '', component: LoginComponent  }, //Permet d'atterir directement sur la page Login
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'welcome', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService] },
  { path: 'users', component: UsersComponent, canActivate:[RouteGuardService] },
  {path : 'users/:id',component:DetailsUsersComponent,canActivate:[RouteGuardService,GuardsDetailsGuard]},
  {path : 'utilisateur/:id',component:AjoutUtilisateursComponent,canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },

  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
