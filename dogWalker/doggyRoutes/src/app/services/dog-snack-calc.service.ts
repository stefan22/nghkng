import { Injectable } from '@angular/core';
import { WalkingLocationsFormat } from '../shared/walking-locations-format';
import { WalkA } from '../shared/walk-a-route-data';
import { LatlonCalcService } from "./latlon-calc.service";

@Injectable({
  providedIn: 'root'
})
export class DogSnackCalcService {

  testCoordinates: WalkingLocationsFormat[] = WalkA;
  distance: any[] = [];

  constructor
  (
    private latlonCalc: LatlonCalcService  //getDistanceBtwPoints()

  ) { }

  
  enterArray() {
    this.twoPoints(this.testCoordinates);
    return this.testCoordinates;
    
  }


  twoPoints(arr: any[]) {
    arr = arr || undefined;
    let dis = [];
    let count = 0, lat, lon;

    let passing = function() {
      if(dis.length % 2 == 0 && dis.length > 4) {
         let remove = dis.splice(0,3);
         return dis;
      }
    };

    if(arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
        lat = arr[i].latitude;
        lon = arr[i].longitude;
        dis.push(lat),dis.push(lon);
        count++;
        if(i == arr.length && arr.length % 2 !== 0) {
          //pull last from dis, against newly inserted
          let lastLat = Number(dis.length-2);
          let lastLon = Number(dis.length-1);
          let lastSegment = this.latlonCalc.getDistanceBtwPoints(dis[lastLat], dis[lastLon],lat,lon);
          this.distance.push(lastSegment);
        }//last-one
        if (count == 2) {
          count = 0;
          
          let segment = this.latlonCalc.getDistanceBtwPoints(
              dis[dis.length-4],dis[dis.length-3],dis[dis.length-2],dis[dis.length-1]);
          this.distance.push(segment);
          passing();
        }//count-2
       

      }//for-loop
      console.info('After running function for every 2 lat/lon points for a walking route');
      console.log('distance btw every 2 points(K): ', this.distance);



    }//if greater-than-zero
    

  }




  
 



}//DogSnackCalcService
