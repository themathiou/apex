import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { StandingsList } from '../shared/models/standings-list';
import { DriverStanding } from '../shared/models/driver-standings';
import { DriverService } from './shared/services/driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})

export class DriversComponent implements OnInit {

  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  
  ngOnInit() {
    this.preselectedDriverId = this.route.snapshot.paramMap.get('id');
    this.getStandings();
  }
  
  /**
   * Initializations
   */
  private DEFAULT_PROFILE_PIC = '../../assets/images/profile.jpg';
  preselectedDriverId: string = '';
  driverStandings: DriverStanding[] = [];
  selectedDriver: DriverStanding;
  driverProfilePicUrl: string = this.DEFAULT_PROFILE_PIC;
  selectedSorting: string = 'POSITION';
  /** Defines if the selected sort will be Ascending(TRUE) or Descengin(False) */
  isSortDirAsc: Boolean = true;

  /** Fetch standing data from Ergast service. */
  getStandings(): void {
    this.driverService.fetchMRData()
      .subscribe(res => {
        this.setStandingLists(res.MRData.StandingsTable.StandingsLists);
        this.preselectedDriverId && this.selectDriver(this.preselectedDriverId);
      })
  }

  selectDriver(id: string): void {
    this.driverProfilePicUrl = this.DEFAULT_PROFILE_PIC;
    let tmpDriver = this.driverStandings.filter(o => 
      o.Driver.driverId === id)[0];
    this.location.replaceState(`/standings/${id}`);
    this.selectedDriver = tmpDriver || null;

    // Super ugly and myopic code. :) Remove before flight!
    // Fetches info from wikipedia and steals the url for driver's image :P
    this.driverService.fetchDriverWikiInfo(tmpDriver.Driver.url.split('/').pop())
    .subscribe(res => {
      // Our souls will be burned in hell...
      this.driverProfilePicUrl = `http:${this.extractProfileImageFromWiki((<any>res)._body.parse.text['*'].split('src="')[1].split('\"')[0])}`;
    });
  }

  onSelectDriver(id: string): void {
    this.selectDriver(id);
  }

  /** 
   * Sorts table data based on type parameter
   * type: string of 'POSITION' | 'DRIVER' | 'CONSTRUCTOR' | 'WINS'
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

  extractProfileImageFromWiki(data: string): string {
    return data;
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
