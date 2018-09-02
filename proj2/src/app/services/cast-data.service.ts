import { CastFormat } from '../shared/cast-format';
import { Cast } from '../shared/cast-data';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CastDataService {

  cast: CastFormat;
  allCast: CastFormat[] = Cast;

  constructor() {
   }

  getEntireCast(): CastFormat[] {
    return this.allCast;
  }

  getCast(): Promise<CastFormat[]> {
      const allCast = Promise.resolve(this.allCast);
      // console.log('IP allCast: ', allCast);
      return allCast;

  }// getCast

  // gets treyparker
  getSelectedCastMember(): CastFormat {
    return this.allCast.filter((item) => {
      if (item.featured) {
        // console.log(item);
        this.cast = item;
        return this.cast;
      }
    })[0];
  }



  getSelectedCastFeatured(cast: string) {
    const name = cast.split(' ')[1];
    return this.allCast.filter((item) => {
      if (item.name.indexOf(name) > 0) {
        // console.log(item);
        return item;
      }

    })[0];

  }

  getFeaturedCastMember(cast: string): Promise<CastFormat> {
    let count = 0;
    const name = cast.split('')[1];
    return Promise.resolve(this.allCast.filter((item) => {
      if (item.name.indexOf(name) > 0 && item.featured) {
        count++;
        if ( count <= 1) {
          // console.log('featured cast member: ', item);
          return item;
        }
      }// if

    })[0]);

  }// getFeaturedCastMember





}// CastDataService
