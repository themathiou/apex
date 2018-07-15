import { Component, OnInit, Input } from '@angular/core';
import { DriverStanding } from '../../shared/models/driver-standings';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit {
  @Input() driverStanding: DriverStanding;

  constructor() { }

  ngOnInit() {
  }

}
