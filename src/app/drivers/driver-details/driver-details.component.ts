import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../shared/models/driver';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  @Input() driver: Driver;

  constructor() { }

  ngOnInit() {
  }

}
