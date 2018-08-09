import { Component, OnInit, Input } from '@angular/core';
import { SeasonFormat } from "../../shared/season-format";

@Component({
  selector: "app-season10-details",
  templateUrl: "./season10-details.component.html",
  styleUrls: ["./season10-details.component.scss"]
})
export class Season10DetailsComponent implements OnInit {
  @Input()
  tenSelected: SeasonFormat;

  commentsTitle = 'Season 10 comments:'


  constructor() {}

  ngOnInit() {}
}
