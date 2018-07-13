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
  
  
  // TODO: Move to a proper place
  private driversUrl = `http://ergast.com/api/f1/2013/driverStandings.json`;
  private mrdata: MRData;

  getMRData(): Observable<MRData> {
    return this.http.get<MRData>(this.driversUrl);
  }
}
