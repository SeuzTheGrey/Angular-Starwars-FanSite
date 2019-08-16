import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './Components/people/people.component';
import { HomeComponent } from './Components/home/home.component';
import { PlanetsComponent } from './Components/planets/planets.component';
import { FilmsComponent } from './Components/films/films.component';
import { SpeciesComponent } from './Components/species/species.component';
import { StarshipsComponent } from './Components/starships/starships.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'people',
    component: PeopleComponent,
    pathMatch: 'full'
  },
  {
    path: 'planets',
    component: PlanetsComponent,
    pathMatch: 'full'
  },
  {
    path: 'films',
    component: FilmsComponent,
    pathMatch: 'full'
  },
  {
    path: 'species',
    component: SpeciesComponent,
    pathMatch: 'full'
  },
  {
    path: 'starships',
    component: StarshipsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
