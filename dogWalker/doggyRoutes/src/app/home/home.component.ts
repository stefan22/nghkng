import { Component, OnInit } from '@angular/core';
import { WalkingRouteFormat } from '../shared/walking-route-format';
import { WalkingRoutesDataService } from
       '../services/walking-routes-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allDoggieRoutes: WalkingRouteFormat[];
  isDogRoute: WalkingRouteFormat;

  constructor
  (
    private walkingRoutes: WalkingRoutesDataService
  ) 
  { }

  ngOnInit() {
    this.allDoggieRoutes = this.walkingRoutes.getAllDogRoutes();
    console.log('all doggie routes: ', this.allDoggieRoutes);
    return this.allDoggieRoutes;
  }

  onDogRouteSelected(dog): WalkingRouteFormat {
    console.log('doggie route selected: ', dog);
    this.isDogRoute = dog;
    return this.isDogRoute;


  }//onDogRouteSelected


  


}//HomeComponent class
