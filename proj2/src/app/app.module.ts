//modules
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RandomSeasonsComponent } from './random-seasons/random-seasons.component';
import { EpisodeDetailsComponent } from './random-seasons/episode-details/episode-details.component';
import { Season10Component } from './season10/season10.component';
import { Season10DetailsComponent } from './season10/details/details.component';

//services
import { EpisodeDataService } from './services/episode-data.service';
import { Season10DataService } from './services/season10-data.service';





@NgModule({
  declarations: [
    AppComponent,
    RandomSeasonsComponent,
    EpisodeDetailsComponent,
    Season10Component,
    Season10DetailsComponent,
    HeaderComponent,
    FooterComponent
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
