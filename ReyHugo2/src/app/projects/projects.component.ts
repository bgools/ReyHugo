import { Component, OnInit } from '@angular/core';
import { Projects } from "../projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  albums: Projects[] = [
    {"name": "Family First", "releaseDate": "March 2020"},
    {"name": "Whitness", "releaseDate": "March 2020"},
    {"name": "Light Of The World", "releaseDate": "March 2020"},
    {"name": "PROVEN", "releaseDate": "March 2020"},
    {"name": "Business As Usual", "releaseDate": "March 2020"},
    {"name": "Dystopianik", "releaseDate": "March 2020"},
    {"name": "Nu-Tang 2: Return For Mo Tang", "releaseDate": "March 2020"},
    {"name": "SoundLyfe Christmas Vol. 4", "releaseDate": "December 2018"},
    {"name": "C.O.D", "releaseDate": "August 2018"},
    {"name": "Gouda: The Money Album", "releaseDate": "July 2018"},
    {"name": "Nu-Tang: Enter The Nu Chamber", "releaseDate": "January 2018"},
    {"name": "Acts", "releaseDate": "December 2017"},
    {"name": "Fo Yo Soul", "releaseDate": "November 2017"},
    {"name": "Built To Last", "releaseDate": "July 2017"},
    {"name": "The 5 Secrets To Living Life (Audio Book)", "releaseDate": "April 2017"},
    {"name": "Hugobraumschild", "releaseDate": "April 2017"},
    {"name": "SoundLyfe Christmas Vol. 3", "releaseDate": "November 2015"},
    {"name": "Good n Well", "releaseDate": "September 2016"},
    {"name": "Motivation Music Vol. 1", "releaseDate": "July 2016"},
    {"name": "Late Nite Hype (Music 2 Ride 2 @ Nite)", "releaseDate": "June 2016"},
    {"name": "YONI", "releaseDate": "April 2016"},
    {"name": "SoundLyfe Christmas Joints Vol. 2", "releaseDate": "December 2015"},
    {"name": "The Gift & The Giver (Deluxe Version)", "releaseDate": "September 2015"},
    {"name": "The Gift & The Giver Reloaded", "releaseDate": "Febuary 2015"},
    {"name": "SondLyfe Christmas Joints", "releaseDate": "December 2014"},
    {"name": "The Gift & The Giver", "releaseDate": "November 2014"},
    {"name": "Guns Down Project", "releaseDate": "October 2014"},
    {"name": "The Greatest (Maxi Single)", "releaseDate": "October 2014"},
    {"name": "iHeart This Music", "releaseDate": "July 2014"},
    {"name": "Tremors Of A Remix", "releaseDate": "November 2013"},
    {"name": "Tremors Of A Thriller", "releaseDate": "September 2013"},
    
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
