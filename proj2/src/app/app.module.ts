// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// non-routing components atm
import { RandomSeasonsComponent } from './random-seasons/random-seasons.component';
import { EpisodeDetailsComponent } from './random-seasons/episode-details/episode-details.component';
import { Season10Component } from './season10/season10.component';
import { Season10DetailsComponent } from './season10/details/season10-details.component';


// page-routing
import { HomeComponent } from './pages/home/home.component';
import { FeaturedComponent } from './pages/home/featured/featured.component';
import { CastComponent } from './pages/cast/cast.component';
import { SeasonsComponent } from './pages/seasons/seasons.component';
import { ContactComponent } from './pages/contact/contact.component';

// login
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';

// services
import { EpisodeDataService } from './services/episode-data.service';
import { Season10DataService } from './services/season10-data.service';
import { OnsaleDataService } from './services/onsale-data.service';
import { JumboComponent } from './header/jumbo/jumbo.component';
import { RegisterComponent } from './register/register.component';



const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'featured/:seasonId',
    component: FeaturedComponent
  },

  {
    path: 'cast/:id',
    component: CastComponent
  },

  {
    path: 'cast',
    component: CastComponent
  },
  {
    path: 'seasons',
    component: SeasonsComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
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
    CastComponent,
    SeasonsComponent,
    ContactComponent,
    FeaturedComponent,
    JumboComponent,
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EpisodeDataService,
    Season10DataService,
    OnsaleDataService

  ],

  entryComponents: [
      LoginComponent,
      RegisterComponent
  ],


  bootstrap: [AppComponent]
})
export class AppModule {}
