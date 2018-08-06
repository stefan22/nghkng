import { Injectable } from '@angular/core';
import { EpisodeFormat } from '../shared/episode-format';
import { Episodes } from '../shared/episodes-data';

@Injectable({
  providedIn: 'root'
})
export class EpisodeDataService {
  episodes: EpisodeFormat[] = Episodes;

  constructor() { }

  getEpisodesData() :EpisodeFormat[] {
    console.log()
    return this.episodes;
  }






}//EpisodeDataService class
