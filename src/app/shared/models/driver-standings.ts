import { Constructor } from './constructor';
import { Driver } from '../../drivers/shared/models/driver';
export class DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}