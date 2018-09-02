import { Component, OnInit } from '@angular/core';
import { SeasonFormat } from '../../shared/season-format';
import { EpisodeFormat } from '../../shared/episode-format';
import { Season10DataService } from '../../services/season10-data.service';


@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  season10: SeasonFormat[]; 
  isTen: EpisodeFormat;

  PScolor = 'primary';
  PSmode = 'determinate';
  PSvalue = 50;

  constructor(private season10DataService: Season10DataService) {

  }

  ngOnInit() {
    this.season10DataService.getSeason10()
      .then((res) => {
        this.season10 = res;
      });

  }// ngOnInit


  onEpisodeSelected(item) {
    const ten = this.isTen = item;
    console.log(ten);
  }

  onBuySeasonNow(e) {
    e.preventDefault();
    console.log('Buy now button, seasons pg');

  }// onBuySeasonNow

  onWatchTrailer(e) {
    e.preventDefault();
    // console.log('Watch trailer, seasons pg');
  }// onWatchTrailer



}// SeasonsComponent class
