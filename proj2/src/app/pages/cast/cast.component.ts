import { Component, OnInit } from '@angular/core';
import { CastDataService } from '../../services/cast-data.service';
import { CastFormat } from '../../shared/cast-format';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {

  entireCast: CastFormat[];

  constructor(private castData: CastDataService) { }

  ngOnInit() {
    this.addCastMembersToPage();

  }// ngOnInit


  addCastMembersToPage() {
    this.castData.getCast().
      then((cast) => {
        this.entireCast = cast;
      });

  }// addCastMembersToPage



}// CastComponent
