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
  vehicle: Vehicle = null;
  editMode: boolean = false;
  invalidSaveAttempt = false;

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
      this.vehicleService.getVehicle(id).subscribe((vehicle: Vehicle) => {
        this.originalVehicle = vehicle;
        if (!this.originalVehicle) {
          return;
        }
        this.editMode = true;
        this.vehicle = JSON.parse(JSON.stringify(this.originalVehicle));
      })
    });
  }

  getYears() {
    var years = [];
    for (var year = new Date().getFullYear() + 1; year > 1979; year--) {
      years.push(year);
    }
    return years;
  }

  onCancel() {
    if (this.editMode) {
      this.router.navigate(['/dashboard', 'vehicle', this.vehicle.id])
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  onSave() {
    if (this.docFrom.invalid) {
      this.invalidSaveAttempt = true;
      return;
    }
    // create a new vehicle

    if (this.editMode) {
      // this.vehicleService.updateVehicle(this.originalVehicle, newVehicle)
    } else {
      // this.vehicleService.createVehicle
    }
  }

}
