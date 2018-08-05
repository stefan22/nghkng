import { Component, OnInit } from '@angular/core';
import { Episodes } from '../shared/episodes-data';

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"]
})
export class MainContentComponent implements OnInit {
  episodes = Episodes;

  selectedEpisode: object;

  constructor() {}

  ngOnInit() {}

  onSelectedEpisode(episode) {
    this.selectedEpisode = episode;
    console.log(this.selectedEpisode);
    return this.selectedEpisode;

  }//onSelectedEpisode



}// MainContentComponent


