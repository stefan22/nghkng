//modules
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

//components
import { AppComponent } from '../app.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { EpisodeDetailsComponent } from '../main-content/episode-details/episode-details.component';
import { Season10Component } from '../season10/season10.component';
import { Season10DetailsComponent } from '../season10/details/details.component';

//services
import { EpisodeDataService } from '../services/episode-data.service';
import { Season10DataService } from '../services/season10-data.service';



@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    EpisodeDetailsComponent,
    Season10Component,
    Season10DetailsComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [EpisodeDataService, Season10DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
