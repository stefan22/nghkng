import { Component, OnInit } from '@angular/core';
import { SeasonFormat } from "../shared/season-format";
import { Season10 } from '../shared/season10-data';

@Component({
  selector: 'app-season10',
  templateUrl: './season10.component.html',
  styleUrls: ['./season10.component.scss']
})
export class Season10Component implements OnInit {

  season10: SeasonFormat[] = Season10;

  constructor() { }

  ngOnInit() {
  }

}
