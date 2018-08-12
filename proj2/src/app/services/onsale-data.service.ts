import { Injectable } from '@angular/core';
import { OnsaleFormat } from '../shared/onsale-format';
import { OnsaleData } from '../shared/onsale-data';

@Injectable({
  providedIn: 'root'
})
export class OnsaleDataService {
  featured: OnsaleFormat;
  allFeatured: OnsaleFormat[] = [];
  constructor() {}

  getFeatured(seasonId: number): OnsaleFormat {

    return OnsaleData.filter((item) => {
      if (item.seasonId == seasonId) {
        return item;
      }
      
    })[0];


  }//getFeatured

  getAllFeatured(): OnsaleFormat[] {

    return OnsaleData.filter((item) => {
      if (item.featured === true) {
        this.allFeatured.push(item);
        return this.allFeatured;
      }

    });


  }//getFeatured






}//OnsaleDataService
