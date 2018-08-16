import { WalkingRoutesData } from "../shared/walking-route-data";
import { WalkingRouteFormat } from "../shared/walking-route-format";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class WalkingRoutesDataService {
  allDogRoutes: WalkingRouteFormat[] = WalkingRoutesData;
  dogRoute: WalkingRouteFormat;

  constructor() {}

  getAllDogRoutes() {
    return this.allDogRoutes;
  } //getAllDogRoutes

  getSelectedDogRoute(id: number): WalkingRouteFormat {
    //debugger;
    return this.allDogRoutes.filter(item => {
      if (item.id == id) {
        this.dogRoute = item;
        return this.dogRoute;
      }
    })[0];
  } //getSelectedDogRoute
}//WalkingRoutesDataService class
