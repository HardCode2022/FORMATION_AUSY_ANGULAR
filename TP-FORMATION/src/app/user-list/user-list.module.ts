import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { UserdetailGuard } from '../security/userdetail.guard';
import { AvisUserModule } from '../avis-user/avis-user.module';
import { UserAddComponent } from '../formulaire/user-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserAddComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {path : 'formulaire', component:UserAddComponent},
      {path : 'users', component: UserListComponent},
      {path : 'users/:id',canActivate:[UserdetailGuard], component:UserDetailComponent}
    ]),
    AvisUserModule,
  ]
})
export class UserListModule { }
