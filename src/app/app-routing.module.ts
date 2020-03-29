import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleDetailComponent } from './dashboard/vehicle-detail/vehicle-detail.component';
import { VehicleEditComponent } from './dashboard/vehicle-edit/vehicle-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard/vehicles', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard/vehicle/:id', component: VehicleDetailComponent, pathMatch: 'full' },
  { path: 'dashboard/vehicle/:id/edit', component: VehicleEditComponent },
  { path: 'dashboard/addVehicle', component: VehicleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
