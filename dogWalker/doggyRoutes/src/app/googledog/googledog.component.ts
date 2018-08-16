import { Component, OnInit } from '@angular/core';
import { DogSnackCalcService } from '../services/dog-snack-calc.service';


@Component({
  selector: 'app-googledog',
  templateUrl: './googledog.component.html',
  styleUrls: ['./googledog.component.scss']
})
export class GoogledogComponent implements OnInit {

  coordinates: any;

  constructor
  (
    private dogsnackService: DogSnackCalcService  //enterArray

  ) { }

  ngOnInit() {
    this.coordinates = this.dogsnackService.enterArray();
    console.log(this.coordinates);


  }

  


  




}//GoogledogComponent class
