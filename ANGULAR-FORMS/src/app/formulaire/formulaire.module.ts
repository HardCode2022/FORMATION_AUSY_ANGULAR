import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { UserSettingsFormsComponent } from './user-settings-forms.component';

@NgModule({
  declarations: [
    UserSettingsFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RatingModule.forRoot(),
  ],
  exports:[
    UserSettingsFormsComponent,
    FormsModule
  ]
})
export class FormulaireModule { }
