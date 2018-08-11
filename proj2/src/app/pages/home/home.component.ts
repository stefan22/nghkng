import { Component, OnInit } from '@angular/core';
import { EpisodeFormat } from '../../shared/episode-format';
import { EpisodeDataService } from "../../services/episode-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  randomSeasons: EpisodeFormat[];
  //season
  isSelected: boolean = false;
  selectedSeason: EpisodeFormat;

  constructor(private episodeDataService: EpisodeDataService) {}

  ngOnInit() {
    this.randomSeasons = this.episodeDataService.getEpisodesData();
    return this.randomSeasons;
  }

  onSelectedSeason(item) {
    console.log(item);
    this.selectedSeason = item;
    this.isSelected = true;
    window.scrollTo(0, 250);
    return this.selectedSeason;
  } //onSelectedEpisode

  backToSeasons() {
    this.isSelected = false;
    window.scrollTo(0, 0);
  }
}//HomeComponent class
