export class ServiceEntry {
  constructor(
    public date: String,
    public odometer: Number,
    public services: String[],
    public notes: String,
    public receipt: String
  ) {}
}