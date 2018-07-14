import { Component, OnInit } from '@angular/core';
import { StandingsList } from '../shared/models/standings-list';
import { Driver } from './shared/driver';
import { DriverStanding } from '../shared/models/driver-standings';
import { DriverService } from './shared/driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})

export class DriversComponent implements OnInit {

  constructor(
    private driverService: DriverService
  ) { }

  ngOnInit() {
    this.getStandings();
  }

  driverStandings: DriverStanding[] = [];
  selectedDriver: Driver;

  getStandings(): void {
    this.driverService.fetchMRData()
      .subscribe(res => {
        this.setStandingLists(res.MRData.StandingsTable.StandingsLists);
      })
  }

  onSelectDriver(id: string): void {
    let tmpDriver = this.driverStandings.filter(o => 
      o.Driver.driverId === id)[0].Driver;
    this.selectedDriver = tmpDriver || null;
  }

  setStandingLists(lists: StandingsList[]): void {
    this.driverStandings = lists[0].DriverStandings;
  };

}
