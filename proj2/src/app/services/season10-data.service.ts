import { Injectable } from '@angular/core';
import { SeasonFormat } from '../shared/season-format';
import { Season10 } from '../shared/season10-data';

@Injectable({
  providedIn: 'root'
})
export class Season10DataService {
  constructor() {
  }

  getSeason10Data(): SeasonFormat[] {
    return Season10;
  }

  getSeason10Data_PD(): Promise<SeasonFormat[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Season10);
      }, 2000);

    });
  
  }// getSeason10Data_PD


  getSeason10(): Promise<SeasonFormat[]> {
    const season = Promise.resolve(Season10);
    // console.log('season10: ', season);
    return season;

  }// getSeason10


  getSeason10_PD(): Promise<SeasonFormat[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Season10);
      }, 2000);  

    });

  }// getSeason10_PD




}// Season10DataService class
