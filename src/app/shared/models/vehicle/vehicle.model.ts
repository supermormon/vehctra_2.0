import { FuelEntry } from './fuelEntry.model';
import { ServiceEntry } from './serviceEntry.model';
import { CustomInfo } from './customInfo.model';

export class Vehicle {
  constructor(
    public id: string,
    public make: string,
    public model: string,
    public year: string,
    public vin: string,
    public licensePlate: string,
    public image: string,
    public customInfos: CustomInfo[],
    public serviceEntries: ServiceEntry[],
    public fuelEntries: FuelEntry[]
  ) {}
}
