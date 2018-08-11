import { Injectable } from '@angular/core';
import { EpisodeFormat } from '../shared/episode-format';
import { Episodes } from '../shared/episodes-data';

@Injectable({
  providedIn: "root"
})
export class EpisodeDataService {
  constructor() {}

  getEpisodesData(): EpisodeFormat[] {
    return Episodes;
  }

  getSelectedEpisode(id: number): EpisodeFormat {
    return Episodes.filter(item => {
      if (item.seasonId == id) {
        return item;
      }
    })[0];
  } //getSelectedEpisode

  getFeaturedEpisode(feat: boolean): EpisodeFormat {
    return Episodes.filter(item => {
      if (item.featured == feat) {
        return item;
      }
    })[0];
  } //getFeaturedEpisode
}//EpisodeDataService class
