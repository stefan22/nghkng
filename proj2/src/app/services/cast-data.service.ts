import { CastFormat } from '../shared/cast-format';
import { Cast } from '../shared/cast-data';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CastDataService {

  cast: CastFormat;
  allCasts: CastFormat[] = Cast;

  constructor() { }

  getEntireCast(): CastFormat[] {
    return this.allCasts;
  }


  getSelectedCastMember(): CastFormat {
    return this.allCasts.filter((item) => {
      if (item.featured) {
        // console.log(item);
        this.cast = item;
        return this.cast;
      }

    })[0];

  }



  getSelectedCastFeatured(cast: string) {
    const name = cast.split(' ')[1];
    return this.allCasts.filter((item) => {
      if (item.name.indexOf(name) > 0) {
        return item;
      }

    })[0];

  }





}// CastDataService
