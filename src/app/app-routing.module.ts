import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import {LoginComponent } from './login/login.component';
import {AddemployeeComponent } from './addemployee/addemployee.component';
const routes: Routes = [
  {path: '', component:LoginComponent, pathMatch: 'full'},
  { path: 'employee', component: EmployeeComponent },
  {path: 'addemployee', component: AddemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
