import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DriverStanding } from '../../shared/models/driver-standings';

@Component({
  selector: 'app-driverlist',
  templateUrl: './driverlist.component.html',
  styleUrls: ['./driverlist.component.scss']
})


export class DriverlistComponent implements OnInit {
  @Input('standings') driverStandings: DriverStanding[];
  @Input() searchText: string;
  @Output() onListSelectDriver: EventEmitter<string> = new EventEmitter<string>();;
  @Output() onListSelectSort: EventEmitter<string> = new EventEmitter<string>();;

  constructor() { }

  ngOnInit() {
  }

  onSelectDriver(id: string): void {
    this.onListSelectDriver.emit(id);
  }

  /** 
   * Exposed to call sorting function from parent
   * type: string of 'POSITION' | 'DRIVER' | 'CONSTRUCTOR' | 'WINS'
   * */
  onSelectSort(type: string): void {
    this.onListSelectSort.emit(type);
  }
}
