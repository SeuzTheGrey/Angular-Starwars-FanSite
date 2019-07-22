import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../Classes/people';
import { PersonComponent } from '../person/person.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() person: People;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PersonComponent, {
      data: this.person
    });
  }

}
