import { Injectable } from '@angular/core';
import { OnsaleFormat } from '../shared/onsale-format';
import { OnsaleData } from '../shared/onsale-data';

@Injectable({
  providedIn: 'root'
})
export class OnsaleDataService {
  featured: OnsaleFormat;

  constructor() {}

  getFeatured(episode: number): OnsaleFormat {

    return OnsaleData.filter((item) => {
      if (item.episodeNumber == episode) {
        return item;
      }
      
    })[0];


  }//getFeatured






}//OnsaleDataService
