import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ProgressComponent } from './progress/progress.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    GraficaComponent,
    ProgressComponent,
    PrincipalPageComponent
  ],
  exports: [
    DashboardComponent,
    GraficaComponent,
    ProgressComponent,
    PrincipalPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
