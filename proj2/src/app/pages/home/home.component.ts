import { Component, OnInit } from '@angular/core';
import { CastFormat } from '../../shared/cast-format';
import { CastDataService } from '../../services/cast-data.service';
import { EpisodeFormat } from '../../shared/episode-format';
import { OnsaleFormat } from '../../shared/onsale-format';
import { OnsaleDataService } from '../../services/onsale-data.service';
import { EpisodeDataService } from '../../services/episode-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomSeasons: EpisodeFormat[];
  allFeatured: OnsaleFormat[];

  // cast
  featcast: CastFormat;
  // season
  isSelected = false;
  selectedSeason: EpisodeFormat;
  // user-selected
  selectedFeatured: OnsaleFormat;
  isFeaturedSelected = false;

  constructor(
    private episodeDataService: EpisodeDataService,
    private onsaleDataService: OnsaleDataService,
    private castDataService: CastDataService

  ) { }

  ngOnInit() {

    this.onsaleDataService.getAllFeatured()
      .then((allfeas) => {
        this.allFeatured = allfeas;
        // console.log('all featured: ', this.allFeatured);
        return this.allFeatured;

      }); // getAllFeatured

    this.featcast = this.castDataService.getSelectedCastMember();

    this.episodeDataService.getAllEpisodes()
      .then((episodes) => {
        this.randomSeasons = episodes;
      });


  }// ngOnInit

  onSelectedSeason(item) {
    console.log('item: ', item);
    this.selectedSeason = item;
    this.isSelected = true;
    window.scrollTo(0, 2500);
    return this.selectedSeason;
  } // onSelectedEpisode


  backToSeasons() {
    this.isSelected = false;
    window.scrollTo(0, 2400);
  }



}// HomeComponent class




