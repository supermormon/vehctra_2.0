import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-option-bar',
  templateUrl: './option-bar.component.html',
  styleUrls: ['./option-bar.component.scss']
})
export class OptionBarComponent implements OnInit {
  @Input('title') title: string;
  id: string;
  showKebabMenu = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

  onToggleKebabMenu() {
    this.showKebabMenu = !this.showKebabMenu;
  }

  onBack() {
    this.router.navigate(['/dashboard']);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete() {
    // console.log(this.id);
    this.vehicleService.deleteVehicle(this.id);
  }

}
