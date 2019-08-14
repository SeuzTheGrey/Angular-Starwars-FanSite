import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../Classes/people';
import { PersonComponent } from '../person/person.component';
import { MatDialog } from '@angular/material/dialog';
import { Planets } from 'src/app/Classes/planets';
import { PlanetComponent } from 'src/app/planet/planet.component';
import { Films } from 'src/app/Classes/films';
import { Species } from 'src/app/Classes/species';
import { Starships } from 'src/app/Classes/starships';
import { Vehicles } from 'src/app/Classes/vehicles';
import { FilmComponent } from 'src/app/film/film.component';
import { SpeciesSingleComponent } from 'src/app/species-single/species-single.component';
import { StarshipComponent } from 'src/app/starship/starship.component';
import { VehicleComponent } from 'src/app/vehicle/vehicle.component';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() person: People;
  @Input() planet: Planets;
  @Input() films: Films;
  @Input() species: Species;
  @Input() starships: Starships;
  @Input() vehicles: Vehicles;

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  openDialog(): void {
    if (this.planet !== undefined) {
      const dialogRef = this.dialog.open(PlanetComponent, {
        data: this.planet
      });
    } else if (this.person !== undefined) {
      const dialogRef = this.dialog.open(PersonComponent, {
        data: this.person
      });
    } else if (this.films !== undefined) {
      const dialogRef = this.dialog.open(FilmComponent, {
        data: this.films
      });
    } else if (this.species !== undefined) {
      const dialogRef = this.dialog.open(SpeciesSingleComponent, {
        data: this.species
      });
    } else if (this.starships !== undefined) {
      const dialogRef = this.dialog.open(StarshipComponent, {
        data: this.starships
      });
    } else if (this.vehicles !== undefined) {
      const dialogRef = this.dialog.open(VehicleComponent, {
        data: this.vehicles
      });
    }
  }

}
