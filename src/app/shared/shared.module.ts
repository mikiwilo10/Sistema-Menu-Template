import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaMenuPaginaComponent } from './lista-menu-pagina/lista-menu-pagina.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ListaMenuPaginaComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    ListaMenuPaginaComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    
  ]
})
export class SharedModule { }
