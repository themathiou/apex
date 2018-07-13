import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverStanding } from '../../shared/models/driver-standings';
import { MRData } from '../../shared/models/mrdata';


@Injectable({
  providedIn: 'root'
})

export class DriverService {

  constructor(
    private http: HttpClient,
  ) { }

  // TODO: Remove to a proper place
  private driversUrl = `http://ergast.com/api/f1/2013/driverStandings.json`;

  getMRData(): Observable<MRData> {
    return this.http.get<MRData>(this.driversUrl);
  }

  // getDriverStandings(): Observable<DriverStanding[]> {
  //   return this.http.get<DriverStanding[]>(this.driversUrl);
  // }
}
