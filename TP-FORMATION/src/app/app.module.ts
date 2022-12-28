import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TpMauriceComponent } from './TP-Maurice/TP-Maurice.component';
import { HttpClientModule } from '@angular/common/http';
import { BienvenueComponent } from './acceuil/bienvenue.component';
import { RouterModule } from '@angular/router';
import { UserListModule } from './user-list/user-list.module';

@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent,
    TpMauriceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'bienvenue', component: BienvenueComponent },
      { path: '', redirectTo: 'bienvenue', pathMatch: 'full' },
      { path: '**', redirectTo: 'bienvenue', pathMatch: 'full' }
    ]),
    UserListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
