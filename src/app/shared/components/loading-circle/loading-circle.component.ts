import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading-circle',
  templateUrl: './loading-circle.component.html',
  styleUrls: ['./loading-circle.component.scss']
})
export class LoadingCircleComponent implements OnInit {
  isLoading = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.loadingChange.subscribe(isLoading => {
      this.isLoading = isLoading;
    })
  }

}
