import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaytrackbyidComponent } from './displaytrackbyid/displaytrackbyid.component';
import { DisplaytrackbyartistComponent } from './displaytrackbyartist/displaytrackbyartist.component';
import { Routes, RouterModule } from "@angular/router";
import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { WelcomeModule } from './welcome/welcome.module';

const routes: Routes = [
  {
    path: '',
    component: WelcomeModule
  },
  {
    path: 'track/:id',
    component: DisplaytrackbyidComponent
  },
  {
    path: 'track/artist/:artist',
    component: DisplaytrackbyartistComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    DisplaytrackbyidComponent,
    DisplaytrackbyartistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    WelcomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
