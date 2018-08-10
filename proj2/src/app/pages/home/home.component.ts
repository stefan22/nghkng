import { Component, OnInit } from '@angular/core';
import { MaterialModule } from "../../modules/material.module";
import { EpisodeFormat } from '../../shared/episode-format';
import { EpisodeDataService } from "../../services/episode-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  randomEpisodes: EpisodeFormat[];
  isSelected: boolean = false;
  selectedEpisode: EpisodeFormat;

  constructor(private episodeDataService: EpisodeDataService) {}

  ngOnInit() {
    this.randomEpisodes = this.episodeDataService.getEpisodesData();
    return this.randomEpisodes;
  }

  onSelectedEpisode(item) {
    console.log(item);
    this.selectedEpisode = item;
    this.isSelected = true;
    window.scrollTo(0,250);
    return this.selectedEpisode;
  } //onSelectedEpisode

  backToSeasons() {
    this.isSelected = false;
    window.scrollTo(0, 0);
    
  }
}//HomeComponent class
