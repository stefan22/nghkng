import { Component, OnInit, Input } from '@angular/core';
import { SeasonFormat } from "../../shared/season-format";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class Season10DetailsComponent implements OnInit {
  @Input()
  tenSelected: SeasonFormat;

  commentsTitle = 'Season 10 comments:'


  constructor() {}

  ngOnInit() {}
}
