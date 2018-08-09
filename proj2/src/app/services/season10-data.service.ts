import { Injectable } from '@angular/core';
import { SeasonFormat } from '../shared/season-format';
import { Season10 } from '../shared/season10-data';

@Injectable()

export class Season10DataService {

  constructor() { }

  getSeason10Data(): SeasonFormat[] {
    return Season10;
  }







}//Season10DataService class
