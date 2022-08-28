import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ReguistroComponent } from './auth/reguistro/reguistro.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListaMenuPaginaComponent } from './shared/lista-menu-pagina/lista-menu-pagina.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReguistroComponent,
    NoPageFoundComponent,
    DashboardComponent,
    ListaMenuPaginaComponent,
    SidebarComponent,
    HeaderComponent,
    GraficaComponent,
    ProgressComponent,
    PrincipalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
