import { Component, OnInit } from '@angular/core';
import {TrackInfoModel} from '../models/TrackInfoModel';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displaytrackbyartist',
  templateUrl: './displaytrackbyid.component.html',
  styleUrls: ['./displaytrackbyid.component.css']
})

export class DisplaytrackbyidComponent implements OnInit {
  pageTitle = 'Track List';
  errorMessage = '';

	tracks: TrackInfoModel[] = []; 
		

    constructor(private http: HttpClient, private route: ActivatedRoute) {

    }
  
    private subscriber: any;

    ngOnInit()
    {
      this.subscriber = this.route.params.subscribe(params => {
           
           this.http.get<TrackInfoModel[]>('/tracks/' + params.id).subscribe({
            next: tracks => {
              this.tracks = tracks;
            },
            
            error: err => this.errorMessage = JSON.stringify(err.error.text) 
          });
          
        });
    }

}