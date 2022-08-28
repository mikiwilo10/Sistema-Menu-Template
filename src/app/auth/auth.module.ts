import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReguistroComponent } from './reguistro/reguistro.component';



@NgModule({
  declarations: [
    LoginComponent,
    ReguistroComponent,
  ],
  exports: [
    LoginComponent,
    ReguistroComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
