import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../Classes/people';
import { PersonComponent } from '../person/person.component';
import { MatDialog } from '@angular/material/dialog';
import { Planets } from 'src/app/Classes/planets';
import { PlanetComponent } from 'src/app/planet/planet.component';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() person: People;
  @Input() planet: Planets;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openDialog(): void {
    if (this.person === undefined) {
      const dialogRef = this.dialog.open(PlanetComponent, {
        data: this.planet
      });
    } else {
      const dialogRef = this.dialog.open(PersonComponent, {
        data: this.person
      });
    }
  }

}
