import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OnsaleDataService } from '../../../services/onsale-data.service';
import { OnsaleFormat } from '../../../shared/onsale-format';



@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  
  selectedFeatured: OnsaleFormat;


  constructor(
    private onsaleDataService: OnsaleDataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    const seasonId = this.route.snapshot.params['seasonId'];
    this.selectedFeatured = this.onsaleDataService.getFeatured(seasonId);
    // console.log(this.selectedFeatured);
    window.scrollTo(0, 0);
    return this.selectedFeatured;
  

  }// ngOnInit

  goBack(): void {
    this.location.back();
    window.scrollTo(0, 0);

  }// goBack


}// FeaturedComponent
