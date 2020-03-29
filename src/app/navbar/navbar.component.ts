import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showAddMenu = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleAddMenu() {
    this.showAddMenu = !this.showAddMenu;
  }

}
