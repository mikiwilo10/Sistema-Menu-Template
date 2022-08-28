import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PrincipalPageComponent } from '../pages/principal-page/principal-page.component';
import { LoginComponent } from '../auth/login/login.component';
import { ReguistroComponent } from '../auth/reguistro/reguistro.component';

const routes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: ReguistroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
