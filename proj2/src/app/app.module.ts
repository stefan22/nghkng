//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//non-routing components atm
import { RandomSeasonsComponent } from './random-seasons/random-seasons.component';
import { EpisodeDetailsComponent } from './random-seasons/episode-details/episode-details.component';
import { Season10Component } from './season10/season10.component';
import { Season10DetailsComponent } from './season10/details/season10-details.component';

//pages-routing
import { HomeComponent } from './pages/home/home.component';
import { FeaturedComponent } from "./pages/home/featured/featured.component";
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { SeasonsComponent } from './pages/seasons/seasons.component';
import { ContactComponent } from './pages/contact/contact.component';

//services
import { EpisodeDataService } from './services/episode-data.service';
import { Season10DataService } from './services/season10-data.service';
import { OnsaleDataService } from './services/onsale-data.service';


const appRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "featured/:seasonId",
    component: FeaturedComponent
  },

  {
    path: "episodes",
    component: EpisodesComponent
  },
  {
    path: "seasons",
    component: SeasonsComponent
  },

  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RandomSeasonsComponent,
    EpisodeDetailsComponent,
    Season10Component,
    Season10DetailsComponent,
    HomeComponent,
    EpisodesComponent,
    SeasonsComponent,
    ContactComponent,
    FeaturedComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EpisodeDataService, 
    Season10DataService, 
    OnsaleDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
