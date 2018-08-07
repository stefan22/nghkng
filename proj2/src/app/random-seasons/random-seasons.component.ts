import { Component, OnInit } from '@angular/core';
import { EpisodeFormat } from '../shared/episode-format';
import { EpisodeDataService } from '../services/episode-data.service';

@Component({
  selector: "app-random-seasons",
  templateUrl: "./random-seasons.component.html",
  styleUrls: ["./random-seasons.component.scss"]
})
export class RandomSeasonsComponent implements OnInit {
  episodes: EpisodeFormat[];
  selectedEpisode: EpisodeFormat;

  constructor(private episodeDataService: EpisodeDataService) {}

  ngOnInit() {
    this.episodes = this.episodeDataService.getEpisodesData();
  }

  onSelectedEpisode(item) {
    this.selectedEpisode = item;
    console.log(this.selectedEpisode);
    return this.selectedEpisode;

  }

  

  
}// MainContentComponent


