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
    let seasonId = this.route.snapshot.params['seasonId'];
    console.log(seasonId);
    this.selectedFeatured = this.onsaleDataService.getFeatured(seasonId);
    console.log(this.selectedFeatured);
  }

  goBack(): void {
    this.location.back();
    window.scrollTo(0,420);
  
  }//goBack
    
  

}
