import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRatingComponent } from './user-rating.component';
import { FormsModule } from '@angular/forms';
import { ConvertTolist } from '../pipes/convert-to-list.pipe';
import { UserAddComponent } from '../formulaire/user-add.component';



@NgModule({
  declarations: [
    UserRatingComponent,
    ConvertTolist,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserRatingComponent,
    ConvertTolist,
    CommonModule,
    FormsModule,
  ]
})
export class AvisUserModule { }
