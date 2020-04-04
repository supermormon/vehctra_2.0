import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Vehicle } from 'src/app/shared/models/vehicle/vehicle.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
})
export class VehicleEditComponent implements OnInit {
  id: string;
  vehicleForm: FormGroup;
  originalVehicle: Vehicle;
  vehicle: Vehicle = null;
  vehicleObservable: Observable<Vehicle>;
  editMode: boolean = false;
  invalidSaveAttempt = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.initForm();

      if (this.id) {
        this.vehicleObservable = this.vehicleService
          .getVehicle(this.id)
          .pipe(tap((vehicle) => {
            this.vehicleForm.patchValue(vehicle);
            let customInfos = (<FormArray>this.vehicleForm.get('customInfos'))
            // clear the array because this logic gets run 3 times for some reason
            customInfos.clear(); 
            vehicle.customInfos.forEach(info => {
              customInfos.push(
                new FormGroup({
                  'title': new FormControl(info.title, Validators.required),
                  'info': new FormControl(info.info, Validators.required)
                })
              )
            })
          }))
        this.vehicleObservable.subscribe((vehicle) => {
          this.originalVehicle = vehicle;
          if (!this.originalVehicle) {
            return;
          }
          this.editMode = true;
          this.vehicle = JSON.parse(JSON.stringify(this.originalVehicle));
        });
      }
    });
  }

  onAddCustomInfoField() {
    (<FormArray>this.vehicleForm.get('customInfos')).push(
      new FormGroup({
        'title': new FormControl(null, Validators.required),
        'info': new FormControl(null, Validators.required)
      })
    );
  }

  onRemoveCustomInfoField(index) {
    (<FormArray>this.vehicleForm.get('customInfos')).removeAt(index);
  }

  onCancel() {
    if (this.editMode) {
      this.router.navigate(['/dashboard', 'vehicle', this.vehicle.id])
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  onSave() {
    if (this.vehicleForm.invalid) {
      console.log(this.vehicleForm);
      console.log(this.vehicleForm.get('year').value);
      this.invalidSaveAttempt = true;
      return;
    }

    if (this.editMode) {
      this.vehicleService.updateVehicle(this.originalVehicle, this.vehicleForm.value);
    } else {
      this.vehicleService.addVehicle(this.vehicleForm.value);
    }
  }

  initForm() {
    // let vehicleVin = '';
    // let vehicleMake = '';
    // let vehicleModel = '';
    // let vehicleYear = '';
    // let vehicleImage = '';
    // let vehicleLicensePlate = '';
    // let vehicleCustomInfo = new FormArray([]);

    this.vehicleForm = new FormGroup({
      'vin': new FormControl('', [Validators.required, Validators.pattern(/^\d{17}$/)]),
      'make': new FormControl('', Validators.required),
      'model': new FormControl('', Validators.required),
      'year': new FormControl('', [Validators.required, Validators.pattern(/\d{4}/)]),
      'image': new FormControl('', Validators.required),
      'licensePlate': new FormControl('', Validators.required),
      'customInfos': new FormArray([])
    });
  }

  get customInfosControl() {
    return (<FormArray>this.vehicleForm.get('customInfos')).controls;
  }

  getYears() {
    var years = [];
    for (var year = new Date().getFullYear() + 1; year > 1979; year--) {
      years.push(year);
    }
    return years;
  }

}
