import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Vehicle } from 'src/app/shared/models/vehicle/vehicle.model';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle;

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.vehicleService.vehicleChangedEvent.subscribe((vehicles) => {
    //   this.vehicle = this.vehicleService.getVehicle(this.route.params['id']);
    // });
    this.vehicle = this.vehicleService.getVehicle(this.route.params['id']);
    this.route.params.subscribe((params: Params) => {
      this.vehicle = this.vehicleService.getVehicle(params['id']);
    });
  }

}
