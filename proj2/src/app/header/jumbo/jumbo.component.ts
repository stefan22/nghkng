import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.scss']
})
export class JumboComponent implements OnInit {
  jumboGreeting = 'Hello Eric';

  height: string;
  width: string;
  @HostListener('window: resize', ['$event'])
  onResizeViewport(e) {
    const height = e.target.visualViewport.height;
    const width = e.target.visualViewport.width;

    if (e.target.visualViewport.width <= 767) {
      this.height = (height - 60) + 'px';
    } else if (e.target.visualViewport.width >= 768) {
      this.height = (height - 70) + 'px';
    }


  }

  constructor() { }

  ngOnInit() {

  }



  onLearnMore(e) {
    e.preventDefault();
    console.log('Learn more btn, jumbo component');

  }// onLearnMore



}// JumboComponent class
