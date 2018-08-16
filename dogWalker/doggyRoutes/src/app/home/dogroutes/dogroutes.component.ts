import { Component, OnInit, Input } from '@angular/core';
import { WalkingRouteFormat } from '../../shared/walking-route-format';
import { WalkingLocationsFormat } from '../../shared/walking-locations-format';
import { WalkingRoutesDataService } from '../../services/walking-routes-data.service';
import { WalkingARouteDataService } from '../../services/walking-a-route-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: "app-dogroutes",
  templateUrl: "./dogroutes.component.html",
  styleUrls: ["./dogroutes.component.scss"]
})
export class DogroutesComponent implements OnInit {

  selectedRoute: WalkingRouteFormat;
  selectedRouteDetails: WalkingLocationsFormat[];

  constructor
  (
    private route: ActivatedRoute,
    private walkingService: WalkingRoutesDataService,
    private location: Location,
    private singleWalkingService: WalkingARouteDataService
   
  ) {}

  ngOnInit() {
   let id = +this.route.snapshot.params['id'];
   console.log('route id: ', id);
   this.selectedRoute = this.walkingService.getSelectedDogRoute(id);
   console.log(this.selectedRoute);
   this.getSingleWalkingRoute();
  }

  getSingleWalkingRoute() {
    let name = this.selectedRoute.name;
    this.selectedRouteDetails = 
    this.singleWalkingService.getWalkingRouteData(name);
    console.log('coordinates: ', this.selectedRouteDetails);
    return this.selectedRouteDetails;

  }//getSingleWalkingRoute


  goBack(): void {
    this.location.back();
  }//goBack


}//DogroutesComponent class
