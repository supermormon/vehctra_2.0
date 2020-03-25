import { FuelEntry } from './fuelEntry.model';
import { ServiceEntry } from './serviceEntry.model';
import { CustomInfo } from './customInfo.model';

export class Vehicle {
  constructor(
    public id: String,
    public make: String,
    public model: String,
    public year: String,
    public vin: String,
    public licensePlate: String,
    public image: String,
    public customInfos: CustomInfo[],
    public serviceEntries: ServiceEntry[],
    public fuelEntries: FuelEntry[]
  ) {}
}
