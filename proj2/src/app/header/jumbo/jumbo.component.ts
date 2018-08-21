import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.scss']
})
export class JumboComponent implements OnInit {
  jumboGreeting = 'Hello Eric';

  constructor() { }

  ngOnInit() {
  }


  onLearnMore(e) {
    e.preventDefault();
    console.log('Learn more btn, jumbo component');


  }// onLearnMore


}// JumboComponent class
