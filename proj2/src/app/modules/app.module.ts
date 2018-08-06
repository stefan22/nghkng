import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from '../app.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { EpisodeDetailsComponent } from '../main-content/episode-details/episode-details.component';
import { Season10Component } from '../season10/season10.component';
import { Season10DetailsComponent } from '../season10-details/season10-details.component';
import { DetailsComponent } from '../season10/details/details.component';


@NgModule({
  declarations: [
    AppComponent, 
    MainContentComponent, EpisodeDetailsComponent, Season10Component, Season10DetailsComponent, DetailsComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
