import { StandingsList } from './standings-list';

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
      StandingsLists: StandingsList[];
    }
  }
}