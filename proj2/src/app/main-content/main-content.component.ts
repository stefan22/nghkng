import { Component, OnInit } from '@angular/core';
import { EpisodeFormat } from '../shared/episode-format';

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"]
})
export class MainContentComponent implements OnInit {
  
  episodes: EpisodeFormat[] = [
    {
      episodeNumber: "78",
      title: "Cartman and Anal Probe",
      description:
        "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      cover: "../assets/images/season14.jpg",
      seasonId: "1",
      price: "7.50"
    },
    {
      episodeNumber: "79",
      title: "Cartman and Anal Probe",
      description:
        "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      cover: "../assets/images/season19.jpg",
      seasonId: "1",
      price: "7.50"
    },
    {
      episodeNumber: "80",
      title: "Cartman and Anal Probe",
      description:
        "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      cover: "../assets/images/season16.jpg",
      seasonId: "1",
      price: "7.50"
    },
    {
      episodeNumber: "81",
      title: "Cartman and Anal Probe",
      description:
        "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      cover: "../assets/images/season8.jpg",
      seasonId: "1",
      price: "7.50"
    },
    {
      episodeNumber: " 82",
      title: "Cartman and Anal Probe",
      description:
        "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      cover: "../assets/images/season14.jpg",
      seasonId: "1",
      price: "7.50"
    }
  ];

  constructor() {}

  ngOnInit() {}
}