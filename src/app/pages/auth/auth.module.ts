import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: 'sign-in',
    component: AuthPage,
    data: {mode: 'signin'}
  }, {
    path: 'sign-up',
    component: AuthPage,
    data: {mode: 'signup'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthPage],
  entryComponents: [AuthPage]
})
export class AuthPageModule {}
