import { Component, OnInit } from '@angular/core';
import { WalkingRoutesDataService } from
       '../services/walking-routes-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allDoggieRoutes: any[];

  constructor
  (
    private walkingRoutes: WalkingRoutesDataService
  ) 
  { }

  ngOnInit() {
    this.allDoggieRoutes = this.walkingRoutes.getAllDogRoutes();
    console.log('all doggie routes: ', this.allDoggieRoutes);
  }







}//HomeComponent class
