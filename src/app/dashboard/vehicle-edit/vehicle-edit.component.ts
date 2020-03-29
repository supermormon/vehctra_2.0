import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vehicle } from 'src/app/shared/models/vehicle/vehicle.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
})
export class VehicleEditComponent implements OnInit {
  @ViewChild('form', { static: false }) docFrom: NgForm;
  originalVehicle: Vehicle;
  vehicle: Vehicle;
  editMode: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      if (!id) {
        this.editMode = false;
        return;
      }
      this.originalVehicle = this.vehicleService.getVehicle(id);
      if (!this.originalVehicle) {
        return;
      }
      this.editMode = true;
      this.vehicle = JSON.parse(JSON.stringify(this.originalVehicle));
    });
  }



  getYears() {
    var years = [];
    for (var year = new Date().getFullYear() + 1; year > 1979; year--) {
      years.push(year);
    }
    return years;
  }

}
