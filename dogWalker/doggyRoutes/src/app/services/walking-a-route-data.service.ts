import { WalkingLocationsFormat } from '../shared/walking-locations-format';
import { WalkA } from '../shared/walk-a-route-data';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalkingARouteDataService {

  walkingRoutes: WalkingLocationsFormat[] = WalkA;

  constructor() { }

  getWalkingRouteData(name: string) {
    //param not needed here but will need one later
    name = name || undefined;
    return this.walkingRoutes;

  }








}//WalkingARouteDataService class
