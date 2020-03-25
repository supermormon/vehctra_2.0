export class FuelEntry {
  constructor(
    public date: String,
    public odometer: Number,
    public gallons: Number,
    public notes: String,
    public receipt: String
  ) {}
}