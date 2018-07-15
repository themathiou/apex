import { Component, OnInit } from '@angular/core';
import { StandingsList } from '../shared/models/standings-list';
import { Driver } from './shared/models/driver';
import { DriverStanding } from '../shared/models/driver-standings';
import { DriverService } from './shared/services/driver.service';

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

  /**
   * Initializations
   */
  driverStandings: DriverStanding[] = [];
  selectedDriver: Driver;
  selectedSorting: string = 'POSITION';
  /** Defines if the selected sort will be Ascending(TRUE) or Descengin(False) */
  isSortDirAsc: Boolean = true;

  /** Fetch standing data from Ergast service. */
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

  /** 
   * Sorts table data based on type parameter
   * type: string of 'POSITION' | 'DRIVER' | 'CONSTRUCTOR' | 'WINS'
   * TODO: enumeration for types?
   * */
  onSelectSort(type: string): void {
    this.isSortDirAsc = this.selectedSorting === type ? !this.isSortDirAsc : true;
    this.selectedSorting = type;

    switch(type) {
      case 'POSITION':
        this.driverStandings
          .sort((a, b) => this.numberCompare(a.position, b.position, this.isSortDirAsc));
        break;
      case 'DRIVER':
        this.driverStandings
          .sort((a, b) => this.stringCompare(a.Driver.familyName, b.Driver.familyName, this.isSortDirAsc));
        break;
      case 'CONSTRUCTOR':
        this.driverStandings
          .sort((a, b) => this.stringCompare(a.Constructors[0].name, b.Constructors[0].name, this.isSortDirAsc));
        break;
      case 'WINS':
        this.driverStandings
          .sort((a, b) => this.numberCompare(a.wins, b.wins, this.isSortDirAsc));
        break;
      default:
        // do nothing
    }
  }

  setStandingLists(lists: StandingsList[]): void {
    this.driverStandings = lists[0].DriverStandings;
  };

  /** Compares two strings. */
  stringCompare = (s1: string, s2: string, isAsc: Boolean) => {
    if (s1 > s2)
      return isAsc ? 1 : -1;

    if (s1 < s2)
      return isAsc ? -1 : 1;

    return 0;
  }

  /** Compares two numbers. */
  numberCompare = (n1: string, n2: string, isAsc: Boolean) => {
    if (Number(n1) > Number(n2))
      return isAsc ? 1 : -1;

    if (Number(n1) < Number(n2))
      return isAsc ? -1: 1;

    return 0;
  }

}
