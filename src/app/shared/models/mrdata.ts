import { DriverStanding } from './driver-standings';

export class MRData {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    StandingsTable: {
      season: string;
      StandingsLists: DriverStanding[];  //TODO: FIX MODELS
    }
  }
}