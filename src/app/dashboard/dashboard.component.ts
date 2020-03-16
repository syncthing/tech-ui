import { Component, OnInit } from '@angular/core';
import { SystemConfigService } from '../system-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  foldersChart = 'foldersChart';
  devicesChart = 'devicesChart';

  constructor(private systemConfigService: SystemConfigService) { }

  ngOnInit() {
    this.systemConfigService.getSystemConfig().subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
  }
}