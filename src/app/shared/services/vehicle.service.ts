import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle/vehicle.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles: Vehicle[] = [];
  vehicleChangedEvent = new Subject<Vehicle[]>();
  baseUri: string;
  endpoint = 'vehicles';

  constructor(
    private http: HttpClient,
    private apiService: ApiService) {
      this.baseUri = apiService.getBaseUri();

    }

  getVehicle(id: string) {
    if (id) {
      return this.vehicles.find(vehicle => {
        return vehicle.id === id;
      });
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
}
