import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';

  _searchbyid = null;
  get SearchbyId(): number {
    return this._searchbyid;
  }

  set SearchbyId(value: number) {
    this._searchbyid = value;   
  }

  

  _searchbyartist = '';
  get SearchbyArtist(): string {
    return this._searchbyartist;
  }

  set SearchbyArtist(value: string) {
    this._searchbyartist = value;   
  }


  constructor() { }

  ngOnInit(): void {
  }

}
