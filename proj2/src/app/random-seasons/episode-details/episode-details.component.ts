import { Component, OnInit, Input } from '@angular/core';
import { EpisodeFormat } from '../../shared/episode-format';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {
  commentsTitle: string = 'comments';
  
  @Input()
  isSelected: EpisodeFormat;
  

  constructor() {}

  ngOnInit() {}



} // EpisodeDetailsComponent class



