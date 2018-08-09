import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from '../../pages/home/home.component';
import { EpisodesComponent } from '../../pages/episodes/episodes.component';
import { SeasonsComponent } from '../../pages/seasons/seasons.component';
import { ContactComponent } from '../../pages/contact/contact.component';


const appRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'episodes',
    component: EpisodesComponent
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
  imports: [
    CommonModule, 
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HomeComponent,
    EpisodesComponent,
    SeasonsComponent,
    ContactComponent
    
  ],
  exports: [ 
    RouterModule 
  ]
})
export class RoutingModule {}
