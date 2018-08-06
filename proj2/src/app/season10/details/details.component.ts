import { Component, OnInit } from '@angular/core';
import { Season10 } from "../../shared/season10-data";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  tenSelected = Season10[0];

  constructor() { }

  ngOnInit() {
  }

}
