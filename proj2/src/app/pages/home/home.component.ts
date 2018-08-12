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
  allFeatures: OnsaleFormat[];
  //season
  isSelected: boolean = false;
  selectedSeason: EpisodeFormat;
  //user-selected
  selectedFeatured: OnsaleFormat;
  isFeaturedSelected: boolean = false;

  constructor(
    private episodeDataService: EpisodeDataService,
    private onsaleDataService: OnsaleDataService
  ) {}

  ngOnInit() {
    this.randomSeasons = this.episodeDataService.getEpisodesData();
    this.allFeatures = this.onsaleDataService.getAllFeatured();

    //return this.randomSeasons;
  }

  onSelectedSeason(item) {
    console.log(item);
    this.selectedSeason = item;
    this.isSelected = true;
    window.scrollTo(0, 1200);
    return this.selectedSeason;
  } //onSelectedEpisode


  backToSeasons() {
    this.isSelected = false;
    window.scrollTo(0, 1200);
  }

  

 






}//HomeComponent class
