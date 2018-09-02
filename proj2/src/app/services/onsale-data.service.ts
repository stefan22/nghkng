import { Injectable } from '@angular/core';
import { OnsaleFormat } from '../shared/onsale-format';
import { OnsaleData } from '../shared/onsale-data';


@Injectable({
  providedIn: 'root'
})
export class OnsaleDataService {
  featured: OnsaleFormat;
  allFeatured = [];

  constructor() { 
  }

  getFeatured(seasonId: number) {
    return OnsaleData.filter((item) => {
      if (item.seasonId === Number(seasonId)) {
        this.featured = item;
        // console.log('featured is : ', this.featured);
        return this.featured;
      }

    })[0];

  }// getFeatured


  getFeatured_PD(seasonId: number): Promise<OnsaleFormat> {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(OnsaleData.filter((item) => {
            if (item.seasonId === seasonId) {
              this.featured = item;
              return this.featured;
            }// if
          })[0]);

        }, 2000);

      });

  }// getFeatured_PD


  getAllFeatured(): Promise<OnsaleFormat[]> {
    return Promise.resolve(
      OnsaleData.filter((item) => {
        if (item.featured === true) {
          this.allFeatured.push(item);
          return this.allFeatured;
        }// if
      })
    );

  }// getAllFeatured



}// OnsaleDataService




