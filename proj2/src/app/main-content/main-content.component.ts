import { Component, OnInit } from '@angular/core';
import { Episodes } from '../shared/episodes-data';

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"]

})

export class MainContentComponent implements OnInit {
  
  episodes = Episodes;

  selectedEpisode = Episodes[0];

  constructor() {}

  ngOnInit() {}

  
}// MainContentComponent


