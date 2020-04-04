import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle/vehicle.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from './loading.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles: Vehicle[] = [];
  vehicleChangedEvent = new Subject<Vehicle[]>();
  baseUri: string;
  endpoint = 'vehicles/';

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private toaster: ToasterService,
    private loader: LoadingService,
    private router: Router) {
      this.baseUri = apiService.getBaseUri();


    }

  getVehicle(id: string): Observable<Vehicle> {
    if (id) {
      if (this.vehicles.length > 0) {
        return new Observable<Vehicle>((observer) => {
          observer.next(this.vehicles.find(vehicle => vehicle.id === id));
        });
      } else {
        this.loader.startLoading();
        return this.http
          .get<Vehicle>(this.baseUri + this.endpoint + id)
          .pipe(tap(vehicles => this.loader.stopLoading()));
      }
    }
  }

  getVehicles() {
    this.http
    .get<Vehicle[]>(this.baseUri + this.endpoint)
    .subscribe(vehicles => {
      this.vehicles = vehicles;
      this.vehicles = this.vehicles.sort((v1, v2) => v1.make >= v2.make ? 1 : -1);
      this.vehicleChangedEvent.next(this.vehicles.slice());
    }, error => {
      console.log(error);
    });
  }

  updateVehicle(oldVehicle: Vehicle, newVehicle: Vehicle) {
    this.loader.startLoading();
    newVehicle.id = newVehicle.id;
    newVehicle.fuelEntries = oldVehicle.fuelEntries;
    newVehicle.serviceEntries = oldVehicle.serviceEntries;
    this.http
      .put(this.baseUri + this.endpoint + oldVehicle.id, newVehicle)
      .subscribe(() => {
        this.vehicles = [];
        this.router.navigate(['/dashboard/vehicle/', oldVehicle.id]);
        this.loader.stopLoading();
        this.toaster.generateToast('Vehicle successfully updated', 3000);
      })
  }

  addVehicle(newVehicle: Vehicle) {
    this.loader.startLoading();
    this.http
      .post(this.baseUri + this.endpoint, newVehicle)
      .subscribe(() => {
        this.vehicles = [];
        this.router.navigate(['/dashboard']);
        this.loader.stopLoading();
        this.toaster.generateToast('Vehicle successfully saved', 3000);
      });
  }

  deleteVehicle(vehicleId: string) {
    console.log(vehicleId);
    this.loader.startLoading();
    this.http
      .delete(this.baseUri + this.endpoint + vehicleId)
      .subscribe(() => {
        this.vehicles = [];
        this.router.navigate(['/dashboard']);
        this.loader.stopLoading();
        this.toaster.generateToast('Vehicle successfully deleted', 3000);
      })
  }
}
