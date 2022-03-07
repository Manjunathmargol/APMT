import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { VarificationRoutingModule} from './varification-routing.module'



@NgModule({
  declarations: [
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    VarificationRoutingModule
  ]
})
export class VarificationModule { }
