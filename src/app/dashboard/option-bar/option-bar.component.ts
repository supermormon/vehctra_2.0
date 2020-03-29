import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-option-bar',
  templateUrl: './option-bar.component.html',
  styleUrls: ['./option-bar.component.scss']
})
export class OptionBarComponent implements OnInit {
  showKebabMenu = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onToggleKebabMenu() {
    this.showKebabMenu = !this.showKebabMenu;
  }

  onBack() {
    this.router.navigate(['/dashboard']);
  }

}
