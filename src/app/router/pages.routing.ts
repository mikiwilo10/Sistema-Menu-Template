import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PrincipalPageComponent } from '../pages/principal-page/principal-page.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { GraficaComponent } from '../pages/grafica/grafica.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PrincipalPageComponent,
    children: [

      {
        path: '', component: DashboardComponent
      },

      {
        path: 'progress', component: ProgressComponent
      },
      {
        path: 'grafica', component: GraficaComponent
      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
