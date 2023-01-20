import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RentedComponent } from './rented/rented.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'rented',component:RentedComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
