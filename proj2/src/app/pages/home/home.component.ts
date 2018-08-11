import { Component, OnInit } from '@angular/core';
import { EpisodeFormat } from '../../shared/episode-format';
import { OnsaleFormat } from '../../shared/onsale-format';
import { OnsaleDataService } from "../../services/onsale-data.service";
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

  //onsale
  featured1: OnsaleFormat;
  featured2: OnsaleFormat;

  constructor(
    private episodeDataService: EpisodeDataService,
    private onsaleDataService: OnsaleDataService
  ) {}

  ngOnInit() {
    this.randomSeasons = this.episodeDataService.getEpisodesData();
    this.featured1 = this.onsaleDataService.getFeatured(18);
    this.featured2 = this.onsaleDataService.getFeatured(21);

    //return this.randomSeasons;
  }

  onSelectedSeason(item) {
    console.log(item);
    this.selectedSeason = item;
    this.isSelected = true;
    window.scrollTo(0, 1200);
    return this.selectedSeason;
  } //onSelectedEpisode

  onFeaturedSelected() {
    console.log('featured clicked');

  }

  backToSeasons() {
    this.isSelected = false;
    window.scrollTo(0, 0);
  }
}//HomeComponent class
