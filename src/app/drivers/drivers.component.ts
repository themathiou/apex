import { Component, OnInit } from '@angular/core';
import { DriverService } from './shared/driver.service';
import { DriverStanding } from '../shared/models/driver-standings';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  constructor(
    private driverService: DriverService
  ) { }

  driverStandings: object[] = [];

  ngOnInit() {
    this.getStandings();
  }

  getStandings(): void {
    this.driverService.getMRData()
      .subscribe(res => {
        this.driverStandings = res.MRData.StandingsTable.StandingsLists;
      })
  }

}
