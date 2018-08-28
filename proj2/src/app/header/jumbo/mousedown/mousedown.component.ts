import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-mousedown',
  templateUrl: './mousedown.component.html',
  styleUrls: ['./mousedown.component.scss']
})
export class MousedownComponent implements OnInit {
  height: string;
  width: string;

  constructor() { }

  ngOnInit() {

  }

  @HostListener('window:resize', ['$event'])
  onResizeViewport(event) {
    const height = event.target.visualViewport.height;
    // const width = event.target.visualViewport.width;
    if ( event.target.visualViewport.width >= 1200 ) {
        this.height = (height - 137) + 'px';
    } else if (event.target.visualViewport.width <= 768) {
      this.height = (height - 75) + 'px';
    } else if (event.target.visualViewport.width > 768 &&
              event.target.visualViewport.width < 1200) {
                this.height = (height - 99) + 'px';
              }

  }// onResizeViewport




}// MousedownComponent
