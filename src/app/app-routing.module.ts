import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Element1Component } from './FirstElement/element1/element1.component';
import { PhoneNumberFormComponent } from './phone-number-form/phone-number-form.component';

const routes: Routes = [
  { path: 'element1', component: Element1Component },
  { path: 'phone-number-form', component: PhoneNumberFormComponent },
  { path: '', redirectTo: '/element1', pathMatch: 'full' }, 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
