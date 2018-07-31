import { Component, OnInit } from '@angular/core';
import { SouthParkEpisodes } from '../shared/southPark-episodes';

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"]
})
export class MainMenuComponent implements OnInit {
  

  episodes: SouthParkEpisodes[] = [
    {
      episodeNumber: "78",
      title: "Cartman and Anal Probe",
      description:
        "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      cover: "images/cover.jpg",
      seasonId: "1",
      price: "7.50"
    },
    {
      episodeNumber: "79",
      title: "Cartman and Anal Probe",
      description:
        "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      cover: "images/cover.jpg",
      seasonId: "1",
      price: "7.50"
    },
    {
      episodeNumber: "80",
      title: "Cartman and Anal Probe",
      description:
        "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      cover: "images/cover.jpg",
      seasonId: "1",
      price: "7.50"
    },
    {
      episodeNumber: "81",
      title: "Cartman and Anal Probe",
      description:
        "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      cover: "images/cover.jpg",
      seasonId: "1",
      price: "7.50"
    },
    {
      episodeNumber:" 82",
      title: "Cartman and Anal Probe",
      description:
        "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      cover: "images/cover.jpg",
      seasonId: "1",
      price: "7.50"
    }
  ];



  constructor() {

  }

  ngOnInit() {}



}
