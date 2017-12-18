import {ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NewjobpostComponent } from "../../newjobpost/newjobpost.component";
export const router: Routes = [
{
      path: '',
        loadChildren: './login/login.component#LoginComponent',
    },
   
    { path: 'employee', loadChildren: './employee/employee.component#EmployeeComponent'},
]


    export class AppRouterModule { }
    export const routes: ModuleWithProviders = RouterModule.forRoot(router);