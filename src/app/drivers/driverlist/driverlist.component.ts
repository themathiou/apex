import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DriverStanding } from '../../shared/models/driver-standings';

@Component({
  selector: 'app-driverlist',
  templateUrl: './driverlist.component.html',
  styleUrls: ['./driverlist.component.css']
})


export class DriverlistComponent implements OnInit {
  @Input('standings') driverStandings: DriverStanding[];
  @Input() searchText: string;
  @Output() onListSelectDriver: EventEmitter<string> = new EventEmitter<string>();;


  constructor() { }

  ngOnInit() {
  }

  onSelectDriver(id: string): void {
    this.onListSelectDriver.emit(id);
  }

}
