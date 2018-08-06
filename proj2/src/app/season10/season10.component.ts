import { Component, OnInit } from '@angular/core';
import { SeasonFormat } from "../shared/season-format";
import { Season10DataService } from '../services/season10-data.service';

@Component({
  selector: 'app-season10',
  templateUrl: './season10.component.html',
  styleUrls: ['./season10.component.scss']
})
export class Season10Component implements OnInit {

  season10: SeasonFormat[];
  isTen: object;

  constructor(private season10DataService: Season10DataService) { }

  ngOnInit() {
    this.season10 = this.season10DataService.getSeason10Data();
  }

  onEpisodeSelected(item) {
    this.isTen = item;
    console.log(this.isTen);
    return this.isTen;

  }



}//Season10Component class
