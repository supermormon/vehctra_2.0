import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Vehicle } from 'src/app/shared/models/vehicle/vehicle.model';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle = null;

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    // this.vehicle = this.vehicleService.getVehicle(this.route.params['id']);
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.loadingService.startLoading();
        this.vehicleService.getVehicle(params['id'])
        .subscribe((vehicle: Vehicle) => {
          console.log(vehicle)
          if (!vehicle) {
            this.router.navigate(['/dashboard']);
          }
          this.vehicle = vehicle;
          this.loadingService.stopLoading();
        });
      }
    });
  }

}
