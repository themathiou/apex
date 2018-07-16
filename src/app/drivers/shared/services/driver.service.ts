import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Jsonp} from '@angular/http';
import { Observable } from 'rxjs';
import { MRData } from '../../../shared/models/mrdata';


@Injectable({
  providedIn: 'root'
})

export class DriverService {

  constructor(
    private http: HttpClient,
    private _jsonp: Jsonp
  ) { }

  private DRIVERS_URL = `http://ergast.com/api/f1/2013/driverStandings.json`;

  /**
   * Fetches data from server
   */
  fetchMRData(): Observable<MRData> {
    return this.http.get<MRData>(this.DRIVERS_URL);
  };


  /** 
   * Fetches page info from wikipedia.
   * */
  fetchDriverWikiInfo(pageId: string): Observable<Object> {
    return this._jsonp.get(`https://en.wikipedia.org/w/api.php?page=${pageId}&format=json&action=parse&callback=JSONP_CALLBACK`);
  }
}
