import { WalkingRoutesData } from "../shared/walking-route-data";
import { WalkingRouteFormat } from "../shared/walking-route-format";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalkingRoutesDataService {

  allDogRoutes: WalkingRouteFormat[] = WalkingRoutesData;
  dogRoute: WalkingRouteFormat;

  constructor() { }

  getAllDogRoutes() {
    return this.allDogRoutes;

  }//getAllDogRoutes



  getSelectedDogRoute(id: number) {
    return this.allDogRoutes.filter((item) => {
      if(this.dogRoute.id == id) {
        return this.dogRoute;
      }

    })[0];
  
  }//getSelectedDogRoute

 


}//WalkingRoutesDataService class
