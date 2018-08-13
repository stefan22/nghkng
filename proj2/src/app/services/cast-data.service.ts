import { CastFormat } from "../shared/cast-format";
import { Cast } from "../shared/cast-data";

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


  getSelectedCastMember(cast: string) {
    let name = cast.split(' ')[1];
    return this.allCasts.filter((item) => {
      if(item.name.indexOf(name) > 0) {
        return item;
      } 
      
    })[0];
    
  }





}//CastDataService
