import { Component, OnInit } from '@angular/core';
import { VehicleService } from './shared/services/vehicle.service';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vehctra';

  constructor(private vehicleService: VehicleService,
    private loadingService: LoadingService) {}

  ngOnInit() {
    // this.vehicleService.getVehicles();
  }

  onActivate(event) {
    window.scroll(0,0);
  }
}

