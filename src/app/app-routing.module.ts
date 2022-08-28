import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ReguistroComponent } from './auth/reguistro/reguistro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPageComponent,
    children: [

      {
        path: 'dashboard', component: DashboardComponent
      },

      {
        path: 'progress', component: ProgressComponent
      },
      {
        path: 'grafica', component: GraficaComponent
      },

      {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
      },
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: ReguistroComponent
  },
  {
    path: '**', component: NoPageFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
