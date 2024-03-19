import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonAddRow1Component } from './FirstElement/button-add-row1/button-add-row1.component';
import { Element1Component } from './FirstElement/element1/element1.component';
import { Element2Component } from './SecondElement/element2/element2.component';

import { Header1Component } from './header1/header1.component';
import { PhoneNumberFormComponent } from './phone-number-form/phone-number-form.component';
import { PhoneNumberService } from './phone-number-form/phone-number.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonAddRow1Component,
    Element1Component,
    Element2Component,
    Header1Component,
    PhoneNumberFormComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PhoneNumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
