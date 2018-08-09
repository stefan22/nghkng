import { Injectable } from '@angular/core';
import { EpisodeFormat } from '../shared/episode-format';
import { Episodes } from '../shared/episodes-data';

@Injectable()

export class EpisodeDataService {

  constructor() { }

  getEpisodesData() :EpisodeFormat[] {
    return Episodes;
  }






}//EpisodeDataService class
