import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleListComponent } from './dashboard/vehicle-list/vehicle-list.component';
import { DashboardNotificationsComponent } from './dashboard/dashboard-notifications/dashboard-notifications.component';
import { VehicleDetailComponent } from './dashboard/vehicle-detail/vehicle-detail.component';
import { VehicleItemComponent } from './dashboard/vehicle-item/vehicle-item.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleEditComponent } from './dashboard/vehicle-edit/vehicle-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionBarComponent } from './dashboard/option-bar/option-bar.component';
import { LoadingCircleComponent } from './shared/components/loading-circle/loading-circle.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    VehicleListComponent,
    DashboardNotificationsComponent,
    VehicleDetailComponent,
    VehicleItemComponent,
    VehicleEditComponent,
    OptionBarComponent,
    LoadingCircleComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
