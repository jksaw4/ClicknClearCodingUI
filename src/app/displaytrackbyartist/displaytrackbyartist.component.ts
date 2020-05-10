import { Component, OnInit } from '@angular/core';
import {TrackInfoModel} from '../models/TrackInfoModel';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displaytrackbyartist',
  templateUrl: './displaytrackbyartist.component.html',
  styleUrls: ['./displaytrackbyartist.component.css']
})
export class DisplaytrackbyartistComponent implements OnInit {
  errorMessage = '';
  tracks: TrackInfoModel[] = [];
    

  constructor(private http: HttpClient, private route: ActivatedRoute) {

    }
  
    private subscriber: any;

    ngOnInit()
    {
      this.subscriber = this.route.params.subscribe(params => {
           
           this.http.get<TrackInfoModel[]>('/tracks/artist/' + params.artist).subscribe({
            next: tracks => {
              this.tracks = tracks;
            },
            error: err => this.errorMessage = JSON.stringify(err.error.text) 
          });
        });
    }

}
