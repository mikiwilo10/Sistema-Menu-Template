import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NoPageFoundComponent } from './404/no-page-found/no-page-found.component';


@NgModule({
  declarations: [
    AppComponent,
   
    NoPageFoundComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
