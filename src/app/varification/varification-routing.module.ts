import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from './login/login.component';
import { HomepageComponent} from './homepage/homepage.component'

const routes: Routes = [
    { path:'login', component:LoginComponent},
    { path:'homepage', component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VarificationRoutingModule { }