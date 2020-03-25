import { Injectable } from '@angular/core';
import { Vehicle } from './models/vehicle/vehicle.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles: Vehicle[] = [];


  constructor() { }
}
