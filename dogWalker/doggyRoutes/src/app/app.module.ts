import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//material
import { CustomMaterialModule } from "./material/material.module";


//routes
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

//services
import { WalkingARouteDataService } from './services/walking-a-route-data.service';
import { WalkingRoutesDataService } from './services/walking-routes-data.service';
import { LatlonCalcService } from './services/latlon-calc.service';
import { DogSnackCalcService } from './services/dog-snack-calc.service';


//routing components
import { HomeComponent } from "./home/home.component";
import { DogroutesComponent } from "./home/dogroutes/dogroutes.component";
import { GoogledogComponent } from './googledog/googledog.component';
import { HeaderComponent } from './header/header.component';

import 'hammerjs';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: 'dogroutes/:id',
    component: DogroutesComponent
  },

  {
    path: "googledog",
    component: GoogledogComponent
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
    HomeComponent,
    DogroutesComponent,
    HeaderComponent,
    GoogledogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CustomMaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WalkingRoutesDataService,
    WalkingARouteDataService,
    LatlonCalcService,
    DogSnackCalcService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
