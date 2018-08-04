import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-episode-details",
  templateUrl: "./episode-details.component.html",
  styleUrls: ["./episode-details.component.scss"]
})
export class EpisodeDetailsComponent implements OnInit {
  commentsTitle: string = 'comments';
  details = Details;  

  constructor() {}

  ngOnInit() {}



} // EpisodeDetailsComponent class



const Details = {

  episodeNumber: "78",
  title: "Cartman and Anal Probe",
  description:
    "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
  cover: "../assets/images/season14.jpg",
  seasonId: "1",
  price: "7.50",

  comments: [
    {
      rating: 5,
      comment: "Great episode!",
      author: "John Lemon",
      date: "2017-10-16T17:57:28.556094Z"
    },
    {
      rating: 4,
      comment:
        "you gotta see this!",
      author: "Paul McVites",
      date: "2018-04-05T17:57:28.556094Z"
    },
    {
      rating: 3,
      comment: "oh man!",
      author: "Michael Jaikishan",
      date: "2017-02-13T17:57:28.556094Z"
    },
    {
      rating: 4,
    comment: "classic eric",
      author: "tony casino",
      date: "2018-03-02T17:57:28.556094Z"
    },
    {
      rating: 5,
      comment: "it never gets old",
      author: "30 cent",
      date: "2018-07-02T17:57:28.556094Z"
    }
  ]
};
