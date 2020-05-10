import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:WelcomeComponent }
    ]),
    FormsModule
  ],
  declarations: [
    WelcomeComponent,
  ]
})
export class WelcomeModule { }