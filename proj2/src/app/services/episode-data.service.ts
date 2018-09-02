import { Injectable } from '@angular/core';
import { EpisodeFormat } from '../shared/episode-format';
import { Episodes } from '../shared/episodes-data';

@Injectable({
  providedIn: 'root'
})
export class EpisodeDataService {
  constructor() {

  }

  getEpisodesData(): EpisodeFormat[] {
    return Episodes;
  }

  getAllEpisodes(): Promise<EpisodeFormat[]> {
    const episodes = Promise.resolve(Episodes);
    // console.log('IP: all episodes: ', episodes);
    return episodes;

  }// getAllEpisodes

  getAllFeatured_PD(): Promise<EpisodeFormat[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(Episodes), 2000);
    });

  }// getAllFeatured_PD

  getSelectedEpisode(id: number): EpisodeFormat {
    return Episodes.filter(item => {
      if (item.seasonId === id) {
        return item;
      }
    })[0];
  } // getSelectedEpisode

  getEpisode(id: number): Promise<EpisodeFormat> {
    return Promise.resolve(Episodes.filter((item) => {
      if (item.seasonId === id ) {
        // console.log('IP: selected episode: ', item);
        return item;
      }
    })[0]);

  }// getEpisode

  getEpisode_PD(id: number): Promise<EpisodeFormat> {
    return new Promise(resolve => {
      setTimeout(() => resolve(Episodes.filter((item) => {
             return item; 
      })[0]), 2000);

    });

  }// getEpisode_PD

  getFeaturedEpisode(feat: boolean): EpisodeFormat {
    return Episodes.filter(item => {
      if (item.featured === feat) {
        return item;
      }
    })[0];
  } // getFeaturedEpisode

  getSelectedFeatured(feat: boolean): Promise<EpisodeFormat> {
    let count = 0;
    return Promise.resolve(Episodes.
      filter((item) => {
        let firstSelectedFeatured;
        if (item.featured === feat) {
          count++;
          if (count <= 1) {
            firstSelectedFeatured = item;
            // console.log('IP first selected featured: ', firstSelectedFeatured);
            return item;
          }
        }// if

      })[0]
    );
  }// getSelectedFeatured

  getSelectedFeatured_PD(feat: boolean): Promise<EpisodeFormat> {
    return new Promise(resolve => {
      let firstFeatured, count = 0;
      setTimeout(() => {
        Episodes.filter((item) => {
          if (item.featured === feat) {
            count++;
            if (count <= 1) {
              firstFeatured = item;
              return item;
            } 
          }// if

        });
      }, 2000);  

    });
  }// getSelectedFeatured_PD


  


  




}// EpisodeDataService class


