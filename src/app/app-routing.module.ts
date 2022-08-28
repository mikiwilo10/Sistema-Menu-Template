import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './404/no-page-found/no-page-found.component';
import { AuthRoutingModule } from './router/auth.routing';
import { PagesRoutingModule } from './router/pages.routing';

const routes: Routes = [

  //path /dashboard PagesRoutingModule,
  //auth /auth AuthRoutingModule

  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: '**', component: NoPageFoundComponent
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    //importa el sistema rutas
    PagesRoutingModule,
    AuthRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
