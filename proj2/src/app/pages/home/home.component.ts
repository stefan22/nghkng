import { Component, OnInit } from '@angular/core';
import { CastFormat } from '../../shared/cast-format';
import { CastDataService } from '../../services/cast-data.service';
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

  //cast
  featcast: CastFormat;
  //season
  isSelected: boolean = false;
  selectedSeason: EpisodeFormat;
  //user-selected
  selectedFeatured: OnsaleFormat;
  isFeaturedSelected: boolean = false;

  constructor(
    private episodeDataService: EpisodeDataService,
    private onsaleDataService: OnsaleDataService,
    private castDataService: CastDataService
  ) {}

  ngOnInit() {
    this.randomSeasons = this.episodeDataService.getEpisodesData();
    this.allFeatures = this.onsaleDataService.getAllFeatured();
    this.featcast = this.castDataService.getSelectedCastMember();

    //return this.randomSeasons;
  }

  onSelectedSeason(item) {
    console.log(item);
    this.selectedSeason = item;
    this.isSelected = true;
    window.scrollTo(0, 1500);
    return this.selectedSeason;
  } //onSelectedEpisode


  backToSeasons() {
    this.isSelected = false;
    window.scrollTo(0, 1200);
  }

  
  

 






}//HomeComponent class
