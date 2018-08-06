import { Component, OnInit } from '@angular/core';
import { EpisodeFormat } from '../shared/episode-format';
import { EpisodeDataService } from '../services/episode-data.service';

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"]
})
export class MainContentComponent implements OnInit {
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

  // onSelectedEpisode(episode) {
  //   this.selectedEpisode = episode;
  //   console.log(this.selectedEpisode);
  //   return this.selectedEpisode;

  // }//onSelectedEpisode
}// MainContentComponent


